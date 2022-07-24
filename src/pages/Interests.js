import * as React from "react";
import MainSection from "../components/MainSection";

const Interests = () => {
  return (
    <MainSection title={"Interests"}>
      <p>
        Outside of work, I like weightlifting, sports (golf, kitesurf, soccer,
        tennis) and languages.
      </p>
      <div>
        <p class="font-bold pb-2">Golf</p>
        <p>
          Started playing golf in 2017 during my time at Stanford. I'm currently
          a ~10-handicap, and this is what's in my bag:
          <ul class="list-disc list-inside ml-4">
            <li>
              <p class="inline font-bold">Driver:</p> Taylor Made Stealth+ (9
              degrees)
            </li>
            <li>
              <p class="inline font-bold">3-wood:</p> Taylor Made Stealth+ (9
              degrees)
            </li>
            <li>
              <p class="inline font-bold">3-hybrid:</p> Taylor Made Stealth (19
              degrees)
            </li>
            <li>
              <p class="inline font-bold">Irons:</p> Taylor Made P-790 (4-A)
            </li>
            <li>
              <p class="inline font-bold">Wedges:</p> Titleist Vokey (56, 60
              degrees)
            </li>
            <li>
              <p class="inline font-bold">Putter:</p> SIK Golf Jo C-Series
            </li>
          </ul>
        </p>
      </div>
      <div>
        <p class="font-bold pb-2">Kitesurfing</p>
        <p>
          Here are some of the places where I've kitesurfed over the past few
          years:
          <ul class="list-disc list-inside ml-4">
            {[
              "La Ventana, Mexico",
              "San Mateo, California",
              "Stinson Beach, California",
              "Miami, Florida",
              "Praia do Guincho, Portugal",
              "Lagoa de Óbidos, Portugal",
              "Jericoacoara, Brazil",
              "Preá, Brazil",
              "Ilha do Guajirú, Brazil",
              "Naxos, Greece",
              "Paros, Greece",
              "St Croix, USVI",
              "Maui, Hawaii",
            ]
              .sort()
              .map((location) => {
                return <li>{location}</li>;
              })}
          </ul>
        </p>
      </div>
      <div>
        <p class="font-bold pb-2">Languages</p>
        <p>
          On top of English and Spanish, I speak French and Portuguese, and I'm
          learning Romanian. I mostly learn via{" "}
          <a class="text-[#3074d9]" href="https://www.italki.com/">
            Italki
          </a>
          .
        </p>
      </div>
    </MainSection>
  );
};

export default Interests;
