"use client";
import Image from "next/image";
import Chat from "../chat";

export default function Home({isChatting, setIsChatting}) {
  return (
    <main className="main">
      <header>
        <nav className="nav-bar">
          <button
            className="hamburger-menu"
            onClick={() => {
              let navLinks = document.querySelectorAll(".nav-link");

              for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.toggle("appear");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                fill="white"
              />
            </svg>
          </button>
          <a href="#awareness" className="nav-link">
            Awareness
          </a>
          <a href="#breeds" className="nav-link">
            Different Breeds
          </a>
          <a href="#enclosure" className="nav-link">
            Enclosure
          </a>
          <a href="#diet" className="nav-link">
            Diet
          </a>
        </nav>
      </header>
      <div className="container">
        <main>
          <section id="awareness" className="content-section">
            <h2 className="section-title">Awareness</h2>

            <figure className="scared-hamster">
              <Image
                src="/images/hamsterAbuse.png"
                alt="Scared Hamster"
                width={200}
                height={500}
                className="image w-[200px] h-auto"
                priority={true}
              />
              <figcaption className="hamster-caption">
                <strong>Hamsters are one of the most</strong>
              </figcaption>
              <figcaption className="hamster-caption">
                <strong>abused animals worldwide!</strong>
              </figcaption>
            </figure>

            <article>
              <p className="content-paragraph">
                Hamsters are adorable and popular small pets, but they are often
                subjected to various forms of abuse when not properly cared for.
              </p>
              <p className="content-paragraph">
                Hamster abuse can take many forms, and two significant aspects
                of this maltreatment include confining hamsters in small cages
                and providing them with an improper diet.
              </p>
              <ul className="content-list">
                <li>
                  <strong>Small Cages</strong>
                </li>
                <ul className="sub-list">
                  <li>
                    <strong>Space Constraints: </strong>Housing hamsters in
                    small cages restricts their ability to move, explore, and
                    express natural behaviors. Hamsters are known for their love
                    of running on wheels and burrowing, which they can&apos;t do
                    adequately in cramped quarters. This confinement can lead to
                    stress, boredom, and physical health problems.
                  </li>
                  <li>
                    <strong>Behavioral Issues: </strong>Small cages can lead to
                    behavioral problems such as cage aggression, excessive
                    chewing on cage bars, and self-harming behaviors due to
                    frustration and boredom.
                  </li>
                  <li>
                    <strong> Limited Enrichment: </strong>Small cages offer
                    limited space for toys and environmental enrichment.
                    Hamsters require mental stimulation, and lack of activities
                    can lead to lethargy and unhappiness.
                  </li>
                </ul>
                <li>
                  <strong>Improper Diet </strong>
                </li>
                <ul className="sub-list">
                  <li>
                    <strong>High-Sugar and Fatty Foods: </strong>Providing
                    hamsters with an improper diet rich in sugary and fatty
                    foods can lead to obesity, diabetes, and dental problems.
                    Hamsters should primarily be fed a balanced diet of
                    high-quality hamster pellets, fresh vegetables, and
                    occasional fruits.
                  </li>
                  <li>
                    <strong>Limited Nutritional Variety: </strong>Some owners
                    may feed their hamsters a monotonous diet, depriving them of
                    the nutritional variety they need for optimal health. A
                    variety of food items should be offered to ensure a balanced
                    intake of nutrients.
                  </li>
                  <li>
                    <strong>Fresh Water: </strong>Neglecting to provide fresh,
                    clean water daily can result in dehydration and related
                    health issues for hamsters. They need a readily available
                    source of water at all times.
                  </li>
                </ul>
              </ul>
              <p className="content-paragraph">
                To combat hamster abuse related to neglect, small cages, and
                improper diets, education and awareness are key. Prospective
                hamster owners should research proper care and commit to
                providing their pets with the necessary attention, space, and
                nutrition they require. Additionally, authorities and animal
                welfare organizations should be vigilant in identifying and
                addressing instances of hamster abuse to ensure the well-being
                of these small, vulnerable creatures. Compassionate and
                responsible ownership is essential to preventing hamster abuse
                and promoting the welfare of these beloved pets.
              </p>
            </article>
          </section>

          <section id="breeds" className="content-section">
            <h2 className="section-title">Different Breeds</h2>
            <article>
              <p className="content-paragraph">
                While they might all look quite similar at first glance, there
                are actually several different breeds of hamsters, each with its
                own unique characteristics and needs. Understanding these
                differences is crucial for providing the best care and ensuring
                the happiness and well-being of your furry friend.
              </p>
              <aside>
                <details className="breed-details">
                  <summary>View different breeds of hamsters</summary>
                  <ul className="content-list">
                    <li>
                      <strong>Syrian Hamsters</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        <strong>Appearance: </strong>Syrian hamsters are the
                        largest among pet hamsters, typically measuring around 6
                        to 7 inches (15 to 18 cm) in length. They come in
                        various coat colors, including golden, cinnamon, and
                        cream.{" "}
                      </li>
                      <li>
                        <strong>Behavior: </strong>Syrian hamsters are solitary
                        animals and should be kept alone. They are known for
                        their gentle temperament and are generally easier to
                        handle compared to some other hamster species.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/syrian.png"
                          alt="Syrian Hamster"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Syrian Hamster
                        </figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong>Dwarf Hamsters</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        <strong>Roborovski Dwarf Hamster: </strong> These are
                        the smallest of the dwarf hamsters, measuring around 2
                        inches (5 cm) in length. They are known for their fast
                        and active nature. They can be kept in pairs or small
                        groups
                      </li>
                      <figure>
                        <Image
                          src="/images/robo.png"
                          alt="Roborovski Dwarf Hamster"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Roborovski Dwarf Hamster
                        </figcaption>
                      </figure>
                      <li>
                        <strong>Campbell&apos;s Dwarf Hamster: </strong>Slightly
                        larger than Roborovski hamsters and can come in various
                        colors. They can be kept in pairs or small groups but
                        may sometimes display territorial behavior.{" "}
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/campbell.png"
                          alt="Campbell's Dwarf Hamster"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Campbell&apos;s Dwarf Hamster
                        </figcaption>
                      </figure>
                      <li>
                        <strong>Winter White Dwarf Hamster: </strong>Also known
                        as the Siberian hamster, Winter Whites can change the
                        color of their fur in response to the seasons. They can
                        be kept in pairs or small groups.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/winterWhite.png"
                          alt="Winter White Dwarf Hamster"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Winter White Dwarf Hamster
                        </figcaption>
                      </figure>
                    </ul>
                  </ul>
                </details>
              </aside>
            </article>
          </section>

          <section id="enclosure" className="content-section">
            <h2 className="section-title">Proper Enclosure</h2>
            <article>
              <p className="content-paragraph">
                Creating a proper hamster enclosure is essential for the health,
                happiness, and well-being of your small furry friend. Hamsters
                are curious and active animals, so providing them with a
                suitable habitat is crucial to ensure they thrive in captivity.
              </p>
              <p>
                Here are some key considerations for setting up a proper hamster
                enclosure:
              </p>
              <aside>
                <details className="enclosure-details">
                  <summary>View Proper Enclosures for hamsters</summary>
                  <ul className="content-list">
                    <li>
                      <strong> Size and Space</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Hamsters need ample space to move around and explore. A
                        cage that is too small can lead to stress and behavioral
                        problems. Aim for a minimum cage size of 360 square
                        inches (about 2,322 square centimeters) of floor space
                        for a single hamster. Bigger is always better, as it
                        allows for more enrichment and exercise opportunities.
                      </li>
                    </ul>
                    <li>
                      <strong> Cage Type</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        There are various types of cages available for hamsters,
                        including wire cages, aquariums, and plastic modular
                        cages. Each has its advantages and disadvantages. Wire
                        cages provide good ventilation but may require a solid
                        bottom to prevent foot injuries. Aquariums are easy to
                        clean but may have ventilation issues. Modular cages
                        offer customization but can be expensive. Choose the
                        type that suits your hamster&apos;s needs and your
                        preferences.
                      </li>
                    </ul>
                    <li>
                      <strong> Ventilation</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Proper ventilation is crucial to prevent the buildup of
                        ammonia from urine fumes. Ensure the cage you choose has
                        adequate ventilation, especially if it&apos;s an
                        aquarium or a cage with solid sides. Regular cleaning is
                        also essential to maintain good air quality.
                      </li>
                    </ul>
                    <li>
                      <strong>Wheel Size</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        A hamster exercise wheel should be appropriately sized
                        to ensure the safety and comfort of your pet. The wheel
                        should be large enough so that when your hamster runs on
                        it, its back remains straight rather than arching or
                        bending. This helps prevent spinal injuries.
                      </li>
                      <li>
                        For Syrian hamsters (also known as golden hamsters), a
                        wheel with a diameter of at least 8 to 12 inches (20 to
                        30 centimeters) is suitable. Dwarf hamsters, such as
                        Roborovski or Campbell&apos;s hamsters, can use a
                        slightly smaller wheel, typically around 6 to 8 inches
                        (15 to 20 centimeters) in diameter. Make sure the wheel
                        has a solid running surface without gaps to prevent your
                        hamster&apos;s feet or tail from getting caught.
                      </li>

                      <figure className="image-section">
                        <Image
                          src="/images/wheel.png"
                          alt="Wheel"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Hamster Wheel
                        </figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong>Bedding</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Proper bedding is crucial for a hamster&apos;s comfort
                        and health. Hamsters use bedding for burrowing, nesting,
                        and absorbing waste. The depth of bedding you provide
                        will depend on your hamster&apos;s preferences, but
                        generally, aim for at least 2 to 3 inches (5 to 7.5
                        centimeters) of bedding throughout the enclosure.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/bedding.png"
                          alt="Bedding"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">Bedding</figcaption>
                      </figure>
                    </ul>
                  </ul>
                </details>
              </aside>
            </article>
          </section>

          <section id="diet" className="content-section">
            <h2 className="section-title">Proper Diet</h2>
            <article>
              <p className="content-paragraph">
                A proper diet is crucial for the health and well-being of your
                pet hamster. Hamsters are omnivores, which means they can eat a
                variety of foods, but they have specific dietary needs that you
                should be aware of.{" "}
              </p>
              <p>A guide to a proper hamster diet:</p>
              <aside>
                <details className="diet-details">
                  <summary>View proper diet for hamsters</summary>
                  <ul className="content-list">
                    <li>
                      <strong> Commercial Hamster Pellets </strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        The foundation of a hamster&apos;s diet should be
                        high-quality commercial hamster pellets. These pellets
                        are specially formulated to provide the essential
                        nutrients your hamster needs. Look for brands that list
                        a protein content of around 16-18% and fiber content of
                        about 12-15%. Avoid those with excessive fillers,
                        colors, or artificial additives.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/pellets.png"
                          alt="Pellets"
                          width={100}
                          height={500}
                          className="image w-[100px] h-auto"
                        />
                        <figcaption className="image-caption">Pellets</figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong> Fresh Vegetables</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        In addition to pellets, fresh vegetables should be a
                        part of your hamster&apos;s diet. Offer a variety of
                        vegetables such as carrots, cucumbers, bell peppers, and
                        broccoli. These veggies provide important vitamins and
                        minerals. However, remember to introduce new vegetables
                        gradually to prevent digestive upset.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/vegetables.png"
                          alt="Vegetables"
                          width={200}
                          height={500}
                          className="image w-[200px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Fresh Vegetables
                        </figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong>Fruits</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Hamsters enjoy fruits as an occasional treat. You can
                        offer small pieces of fruits like apples, pears, and
                        bananas. Fruits are high in natural sugars, so feed them
                        sparingly to prevent weight gain.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/fruits.png"
                          alt="Fruits"
                          width={200}
                          height={500}
                          className="image w-[200px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Fresh Fruit
                        </figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong>Protein</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Protein is an essential part of a hamster&apos;s diet.
                        You can provide protein through small amounts of cooked
                        chicken, boiled eggs, or mealworms. These should be
                        given in moderation, as excessive protein can lead to
                        health issues.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/meal-worms.png"
                          alt="Meal Worms"
                          width={150}
                          height={500}
                          className="image w-[150px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Meal Worms
                        </figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong> Fresh Water</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Always provide your hamster with fresh, clean water. Use
                        a sipper bottle or a shallow dish, but make sure the
                        water is changed daily to prevent contamination.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/water.png"
                          alt="Fresh Water"
                          width={200}
                          height={500}
                          className="image w-[200px] h-auto"
                        />
                        <figcaption className="image-caption">
                          Sipper Bottle
                        </figcaption>
                      </figure>
                    </ul>
                    <li>
                      <strong>Hay</strong>
                    </li>
                    <ul className="sub-list">
                      <li>
                        Hay is not a primary food source for hamsters, but it
                        can help with dental health and provide fiber. Timothy
                        hay is a suitable option.
                      </li>
                      <figure className="image-section">
                        <Image
                          src="/images/hay.png"
                          alt="Hay"
                          width={100}
                          height={500}
                          className="image w-[100px] h-auto"
                        />
                        <figcaption className="image-caption">Hay</figcaption>
                      </figure>
                    </ul>
                    <p className="content-paragraph">
                      Remember to monitor your hamster&apos;s food intake, and
                      adjust portion sizes to maintain a healthy weight. Avoid
                      feeding sugary or fatty foods, as they can lead to obesity
                      and other health problems. A balanced and varied diet,
                      along with fresh water, will help keep your hamster happy
                      and healthy.
                    </p>
                  </ul>
                </details>
              </aside>
            </article>
          </section>
        </main>
      </div>

      {!isChatting && <button onClick={() => {setIsChatting(!isChatting)}}>
        <Image 
          src="/images/chat.png"
          alt="Chat Logo"
          width={50}
          height={50}
          className="chat "
          priority={true}
        />
      </button>}

      {isChatting && <Chat isChatting={isChatting} setIsChatting={setIsChatting}/>}

      <footer className="footer">
        <p className="footer-text">Research before buying a pet</p>
      </footer>
    </main>
  );
}