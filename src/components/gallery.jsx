import React, { useState } from "react";
import "../styles/gallery.css";
import SideNavigation from "./sideNavigation";
import Image1 from '../components/img/a000123.jpg'
import Image2 from '../components/img/asdd.jpg'
import Image3 from '../components/img/das.jpg'
import Image4 from '../components/img/DSC00207.JPG'
import Image5 from '../components/img/DSC00233.JPG'
import Image6 from '../components/img/DSC00457.JPG'
import Image7 from '../components/img/DSC00471.JPG'
import Image8 from '../components/img/DSC01689.JPG'
import Image9 from '../components/img/DSC02079.JPG'
import Image10 from '../components/img/DSC03246.JPG'
import Image11 from '../components/img/DSC03284.JPG'
import Image12 from '../components/img/DSC03429.JPG'
import Image13 from '../components/img/image1.JPG'
import Image14 from '../components/img/photo_2025-01-16_01-36-34.jpg'
export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div class="gallery">
        <SideNavigation isOpen={isOpen} toggleNavigation={toggleNavigation} />
        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image1}
              alt="Portrait by Jessica Felicio"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image2}
              alt="Portrait by Oladimeji Odunsi"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image3}
              alt="Portrait by Alex Perez"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image7}
              alt="Portrait by Hikiapp"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image5}
              alt="Portrait by Ivana Cajina"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">
              Portrait by Ivana Cajina
            </figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image6}
              alt="Portrait by Caique Nascimento"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image4}
              alt="Portrait by Mari Lezhava"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image8}
              alt="Portrait by Ethan Haddox"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image9}
              alt="Portrait by Amir Geshani"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image10}
              alt="Portrait by Tyler Nix"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image11}
              alt="Portrait by Jasmin Chew"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>

        <a target="_blank" class="gallery__link">
          <figure class="gallery__thumb">
            <img
              src={Image12}
              alt="Portrait by Dima DallAcqua"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Portrait by FS</figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
}
