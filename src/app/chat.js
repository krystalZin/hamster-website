"use client"
import { useCompletion } from 'ai/react';
import { MdOutlineClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaStop } from "react-icons/fa";
import Image from 'next/image';

function processInlineMarkdown(text) {
  // Escape HTML
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');

  return html;
}

function markdownToHtml(text) {
  const lines = text.split('\n');
  let html = '';
  let inTable = false;
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if it's a table row
    if (line.includes('|')) {
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
      if (cells.length > 0) {
        // Check if it's a separator row (all cells are dashes)
        const isSeparator = cells.every(cell => /^-+$/.test(cell));
        if (isSeparator) continue;

        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        tableRows.push(cells);
        continue;
      }
    }

    // If we were in a table, end it
    if (inTable) {
      html += '<table class="border-collapse border border-gray-300">';
      tableRows.forEach((row, index) => {
        html += '<tr>';
        row.forEach(cell => {
          const tag = index === 0 ? 'th' : 'td';
          const classes = index === 0 ? 'border border-gray-300 px-4 py-2 bg-gray-100 font-semibold' : 'border border-gray-300 px-4 py-2';
          html += `<${tag} class="${classes}">${processInlineMarkdown(cell)}</${tag}>`;
        });
        html += '</tr>';
      });
      html += '</table>';
      inTable = false;
      tableRows = [];
    }

    // Process non-table lines
    let processedLine;

    // Horizontal line
    if (/^-{3,}$/.test(line.trim())) {
      processedLine = '<hr>';
    // Block quote
    } else if (line.startsWith('> ')) {
      processedLine = '<blockquote>' + processInlineMarkdown(line.slice(2)) + '</blockquote>';
    // Headers
    } else if (line.startsWith('### ')) {
      processedLine = '<h3>' + processInlineMarkdown(line.slice(4)) + '</h3>';
    } else if (line.startsWith('## ')) {
      processedLine = '<h2>' + processInlineMarkdown(line.slice(3)) + '</h2>';
    } else if (line.startsWith('# ')) {
      processedLine = '<h1>' + processInlineMarkdown(line.slice(2)) + '</h1>';
    } else if (line.startsWith('- ')) {
      processedLine = '<li>' + processInlineMarkdown(line.slice(2)) + '</li>';
    } else {
      processedLine = '<p>' + processInlineMarkdown(line) + '</p>';
    }

    html += processedLine;
  }

  // Close any open table
  if (inTable) {
    html += '<table class="border-collapse border border-gray-300">';
    tableRows.forEach((row, index) => {
      html += '<tr>';
      row.forEach(cell => {
        const tag = index === 0 ? 'th' : 'td';
        const classes = index === 0 ? 'border border-gray-300 px-4 py-2 bg-gray-100 font-semibold' : 'border border-gray-300 px-4 py-2';
        html += `<${tag} class="${classes}">${processInlineMarkdown(cell)}</${tag}>`;
      });
      html += '</tr>';
    });
    html += '</table>';
  }

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>');

  return html;
}

export default function Chat({isChatting, setIsChatting}) {
    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit
      } = useCompletion({
        api: '/api/completion'
      });

    return (
        <div className="chatBox mx-auto w-full max-w-md py-4 px-4 flex flex-col stretch lg:w-1/3 rounded h-full">
            <MdOutlineClose className='text-2xl cursor-pointer ml-auto' onClick={() => {setIsChatting(!isChatting)}} />
            <div className="chatImage">
                {isChatting && (
                    <>
                        <Image
                            src="/images/fig.png"
                            alt="Hamster Logo"
                            width={50}
                            height={50}
                            className="w-15 h-auto" 
                            priority={true}
                        />
                        <p className='text'>Ask me anything about hamster care!</p>
                    </>
                )}
            </div>

            <output className='Output grow' dangerouslySetInnerHTML={{ __html: markdownToHtml(completion) }}></output>
            <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-8">
                <label className="grow">
                    <input
                        className="messageBox w-full max-w-md bottom-0 border border-gray-300 rounded shadow-xl p-2"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Write a message..."
                    />
                </label>
                <button className="Stop" type="button" onClick={stop}>
                    <FaStop />
                </button>
                <button className="Send" disabled={isLoading} type="submit">
                    <IoSend />
                </button>
            </form>
        </div>
    )
}
