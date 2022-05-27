/* eslint-disable max-len */
import React from 'react';
import Document, { NextScript, Html, Main, Head } from 'next/document';

const scriptTxt = `
(function () {
  const { pathname } = window.location;
  const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname); 
  const base = document.createElement('base') 
  base.href = ipfsMatch ? ipfsMatch[0] : '/';
  document.head.append(base); 
})();
`;

const gaScriptText = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y06VSWY6VY');
`;

const goolgeFonts = [
  'Abel',
  'Abhaya+Libre:wght@700',
  'Akronim',
  'Alef',
  'Alegreya:wght@400;700',
  'Allerta+Stencil',
  'Amethysta',
  'Antic',
  'Antic+Didone',
  'Anton',
  'Antonio',
  'Architects+Daughter',
  'Aref+Ruqaa:wght@700',
  'Arimo',
  'Armata',
  'Arvo',
  'Asap',
  'Astloch',
  'Atkinson+Hyperlegible',
  'Atma',
  'Aubrey',
  'Audiowide',
  'Averia+Libre',
  'Averia+Serif+Libre',

  'Bad+Script:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Ballet',
  'Baloo+Bhai+2:wght@700',
  'Baloo+Chettan+2',
  'Baloo+Chettan+2:wght@700',
  'Baloo+Tammudu+2',
  'Baloo+Thambi+2',
  'Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Barriecito',
  'Barrio',
  'Baskervville',
  'Baumans',
  'Bayon',
  'Bebas+Neue',
  'Belgrano',
  'Bellota+Text',
  'Beth+Ellen',
  'Bigelow+Rules',
  'Big+Shoulders+Inline+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'BioRhyme:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Bitter:wght@900',
  'Bodoni+Moda',
  'Boogaloo',
  'Bowlby+One+SC',
  'Bubblegum+Sans',
  'Buda:wght@300',
  'Bungee+Inline',
  'B612+Mono',

  'Cantarell',
  'Cantora+One',
  'Carme',
  'Chakra+Petch',
  'Chicle',
  'Chivo',
  'Chilanka',
  'Cinzel',
  'Coda',
  'Coda+Caption:wght@800',
  'Convergence',
  'Corben',
  'Cormorant+Infant:wght@600',
  'Cormorant+Garamond:wght@600',
  'Cormorant+Upright:wght@700',
  'Coustard:wght@900',
  'Croissant+One',
  'Cutive',

  'Dekko',
  'Delius+Unicase:wght@700',
  'Devonshire',
  'Didact+Gothic',
  'Diplomata',
  'DM+Mono',
  'DM+Sans',
  'Domine:wght@700',
  'Donegal+One',
  'Do+Hyeon',
  'Duru+Sans',

  'Eczar',
  'Electrolize',
  'Elsie+Swash+Caps:wght@400;900',
  'Encode+Sans+Semi+Expanded:wght@400;700',
  'Englebert',
  'Erica+One',
  'Esteban',
  'Ewert',
  'Expletus+Sans',

  'Faster+One',
  'Faustina',
  'Fira+Code',
  'Fira+Mono:wght@400;700',
  'Fira+Sans:wght@400;500;700',
  'Fira+Sans+Condensed:wght@700',
  'Fjalla+One',
  'Flamenco',
  'Forum',
  'Frank+Ruhl+Libre:wght@700',
  'Freckle+Face',
  'Frijole',
  'Fugaz One',

  'Galada',
  'Galindo',
  'Gayathri',
  'Gelasio',
  'Geo',
  'Geostar+Fill',
  'Gentium+Basic:wght@700',
  'Gluten',
  'Goblin+One',
  'Gravitas+One',
  'Griffy',
  'Gudea:wght@700',
  'Gugi',

  'Habibi',
  'Halant:wght@700',
  'Hammersmith+One',
  'Hanalei',
  'Headland+One',
  'Henny+Penny',
  'Hind+Siliguri:wght@700',
  'Homenaje',

  'Iceberg',
  'Imbue',
  'Imprima',
  'IM+Fell+DW+Pica+SC',
  'IM+Fell+French+Canon',
  'IM+Fell+French+Canon:ital@1',
  'IM+Fell+French+Canon+SC',
  'Inconsolata',
  'Indie+Flower',
  'Inria+Sans:wght@700',
  'Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Istok+Web',
  'Italiana',

  'Jacques+Francois',
  'Jacques+Francois+Shadow',
  'Jaldi',
  'Jim+Nightshade',
  'Jockey+One',
  'Jolly+Lodger',
  'Jost',
  'Jua',
  'Just+Another+Hand',

  'Kameron',
  'Kavivanar',
  'Kavoon',
  'Khand',
  'Knewave',
  'Kodchasan:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Krona+One',
  'Krub',
  'Kumar+One',
  'K2D',

  'Lacquer',
  'Lalezar',
  'Lekton',
  'Lemon',
  'Lexend+Deca',
  'Lexend+Exa',
  'Lexend+Giga',
  'Lexend+Peta',
  'Lobster+Two',
  'Londrina+Shadow',
  'Long+Cang',
  'Luckiest+Guy',

  'Maiden Orange',
  'Mali:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Mansalva',
  'Manuale',
  'Marcellus',
  'Marck+Script',
  'Mate',
  'MedievalSharp',
  'Meera+Inimai',
  'Metrophobic',
  'Milonga',
  'Miltonian',
  'Modak',
  'Molengo',
  'Monoton',
  'Nosifer',
  'Mouse+Memoirs',
  'Mukta+Malar:wght@400;700',
  'Mrs+Sheppards',

  'Nanum+Brush+Script',
  'Newsreader:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'News+Cycle',
  'New+Rocker',
  'Nova+Cut',
  'Nova+Round',

  'Odibee+Sans',
  'Offside',
  'Oldenburg',

  'Pacifico',
  'Pangolin',
  'Passion+One',
  'Pathway+Gothic+One',
  'Patrick+Hand',
  'Patrick+Hand+SC',
  'Peralta',
  'Pirata+One',
  'Plaster',
  'Play:wght@700',
  'Podkova',
  'Poller+One',
  'Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Poor+Story',
  'Port+Lligat+Slab',
  'Prompt:wght@600',
  'PT+Sans+Caption:wght@700',
  'Purple+Purse',

  'Orbitron',
  'Quando',
  'Quicksand:wght@700',
  'Qwigley',

  'Rajdhani',
  'Raleway+Dots',
  'Ramabhadra',
  'Rambla',
  'Redressed',
  'Red+Rose',
  'Reem+Kufi',
  'Revalia',
  'Righteous',
  'Risque',
  'Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Roboto+Condensed:wght@700',
  'Roboto+Mono',
  'Romanesco',
  'Rosarivo',
  'Rubik',
  'Rubik+Mono+One',
  'Russo+One',
  'Rye',

  'Sail',
  'Salsa',
  'Sancreek',
  'Saira+Extra+Condensed',
  'Sedgwick+Ave+Display',
  'Share+Tech',
  'Shojumaru',
  'Signika',
  'Smythe',
  'Sniglet',
  'Snippet',
  'Sofia',
  'Song+Myung',
  'Space+Mono',
  'Spartan:wght@900',
  'Spicy+Rice',
  'Squada+One',
  'Staatliches',
  'Stint+Ultra+Condensed',
  'Suez+One',
  'Sunflower:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Sura',
  'Sura:wght@700',
  'Syncopate',
  'Syne+Tactile',

  'Tauri',
  'Tillana:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Thasadith',
  'Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Trirong',

  'Underdog',

  'Vampiro+One',
  'Volkhov',

  'Wallpoet',
  'Warnes',
  'Wellfleet',

  'Yantramanav:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  'Yusei+Magic',

  'Zen+Loop',
  'Zilla+Slab+Highlight',
];

class MyDocument extends Document {
  getGoogleFontsLinks() {
    return goolgeFonts.map((font, index) => (
      <link
        rel="stylesheet"
        key={index}
        href={`https://fonts.googleapis.com/css2?family=${font}`}
      />
    ));
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="/arkane-network/web3-arkane-provider.js" />
          <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y06VSWY6VY" />
          <script dangerouslySetInnerHTML={{ __html: gaScriptText }} />
          {this.getGoogleFontsLinks()}

          {/* ipfs next.js fix */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            
            @font-face {
              font-family: "Internal Rainbows";
              src: url("./fonts/Internal Rainbows.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-Light.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 900;
            }
            @font-face {
              font-family: "Armata-Regular";
              src: url("./fonts/Armata-Regular.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Animosa";
              src: url("./fonts/Animosa-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "A DAY WITHOUT SUN";
              src: url("./fonts/A DAY WITHOUT SUN.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nella Sue Demo';
              src: url("./fonts/NellaSueDEMO.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken SemiBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken Bold.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Artisual Deco DEMO';
              src: url("./fonts/ArtisualDeco-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Mad Galaxy Demo';
              src: url("./fonts/MadGalaxyDemoRegular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Archie Websters';
              src: url("./fonts/Archie Websters.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rugrats';
              src: url("./fonts/RugratS.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Rugsnatcher DEMO';
              src: url("./fonts/rugsnatcher DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Beth Ellen';
              src: url("./fonts/Beth-Ellen-2.0.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Jacques Francois';
              src: url("./fonts/JacquesFrancois-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Tera';
              src: url("./fonts/LexendTera-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Zetta';
              src: url("./fonts/LexendZetta-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Medula One';
              src: url("./fonts/MedulaOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aldrich';
              src: url("./fonts/Aldrich-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Cool Chaos';
              src: url("./fonts/Cool Chaos.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Heaven Wanders DEMO';
              src: url("./fonts/Heaven_Wanders_DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Comics Tricks';
              src: url("./fonts/Comics Tricks.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Habbo';
              src: url("./fonts/HabboFont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Ayuthaya';
              src: url("./fonts/ayuthaya-webfont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arima Madurai';
              src: url("./fonts/ArimaMadurai-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Mada';
              src: url("./fonts/Mada-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Mervale Script';
              src: url("./fonts/MervaleScript-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Metal Lord';
              src: url("./fonts/Metal-Lord.ttf");
            }

            @font-face {
              font-family: 'PLAYPULL';
              src: url("./fonts/PLAYPULL_Demo.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Acme';
              src: url("./fonts/Acme-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rochester';
              src: url("./fonts/Rochester-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nunito Sans';
              src: url("./fonts/NunitoSans-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Blacker Display';
              font-weight: 400;
              src: url("./fonts/Blacker-Display-Regular-trial.ttf");
            }

            @font-face {
              font-family: 'Blacker Display';
              font-weight: 700;
              src: url("./fonts/Blacker-Display-Bold-trial.ttf");
            }
            
            @font-face {
              font-family: 'Blacker Display';
              font-weight: 900;
              src: url("./fonts/Blacker-Display-Heavy-trial.ttf");
            }
          
            @font-face {
              font-family: 'Arapey';
              src: url("./fonts/Arapey-Regular.ttf");
            }
          
            @font-face {
              font-family: 'EB Garamond';
              src: url("./fonts/EBGaramond-VariableFont_wght.ttf");
            }
          
            @font-face {
              font-family: 'Julietta Messie Demo';
              src: url("./fonts/FontsFree-Net-Julietta-Messie-Demo.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Asdonuts';
              src: url("./fonts/Asdonuts.ttf");
            }

            @font-face {
              font-family: 'Ode to Idle Gaming';
              src: url("./fonts/Ode to Idle Gaming.otf");
            }
          
            @font-face {
              font-family: 'Olivia & Kevin';
              src: url("./fonts/Olivia & Kevin.ttf");
            }
          
            @font-face {
              font-family: 'Knife Princess';
              src: url("./fonts/Knife Princess.ttf");
            }
          
            @font-face {
              font-family: 'Sen';
              src: url("./fonts/Sen-Regular.ttf");
            }

            @font-face {
              font-family: 'Gidugu';
              src: url("./fonts/Gidugu-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Smokum';
              src: url("./fonts/Smokum-Regular.ttf");
            }
                    
            @font-face {
              font-family: 'Slackside One';
              src: url("./fonts/slackside-one-regular.ttf");
            }
                      
            @font-face {
              font-family: 'Akira Expanded';
              src: url("./fonts/Akira Expanded Demo.otf");
            }

            @font-face {
              font-family: 'Smythe';
              src: url("./fonts/Smythe-Regular.ttf");
            }

            @font-face {
              font-family: 'Slackey';
              src: url("./fonts/Slackey-Regular.ttf");
            }

            @font-face {
              font-family: 'Digital Dare';
              src: url("./fonts/Digital Dare.ttf");
            }

            @font-face {
              font-family: 'Akaya Telivigala';
              src: url("./fonts/AkayaTelivigala-Regular.ttf");
            }

            @font-face {
              font-family: 'Barriecito';
              src: url("./fonts/Barriecito-Regular.ttf");
            } 
            
            @font-face {
              font-family: '6809 chargen';
              src: url("./fonts/6809 chargen.ttf");
            } 

            @font-face {
              font-family: 'Arbutus Slab';
              src: url("./fonts/ArbutusSlab-Regular.ttf");
            } 

            @font-face {
              font-family: 'Bilbo Swash Caps';
              src: url("./fonts/BilboSwashCaps-Regular.ttf")
            }

            @font-face {
              font-family: 'Alfa Slab One';
              src: url("./fonts/AlfaSlabOne-Regular.ttf")
            }

            @font-face {
              font-family: 'Euphoria Script';
              src: url("./fonts/EuphoriaScript-Regular.ttf")
            }
          
            @font-face {
              font-family: 'Didot';
              src: url("./fonts/GFSDidot-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Dhurjati';
              src: url("./fonts/Dhurjati-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Bahiana';
              src: url("./fonts/Bahiana-Regular.ttf");
            }
            
            @font-face {
              font-family: 'DM Mono';
              src: url("./fonts/DMMono-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Masterblast';
              src: url("./fonts/Masterblast.otf");
            }
            
            @font-face {
              font-family: 'Carter One';
              src: url("./fonts/CarterOne-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Baloo Tamma 2';
              src: url("./fonts/BalooTamma2-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Covered By Your Grace';
              src: url("./fonts/CoveredByYourGrace-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Boldfinger';
              src: url("./fonts/Boldfinger.ttf");
            }
          
            @font-face {
              font-family: 'Crafty Girls';
              src: url("./fonts/CraftyGirls-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Cinzel Decorative';
              font-weight: 400;
              src: url("./fonts/CinzelDecorative-Regular.ttf");
            }

            @font-face {
              font-family: 'Cinzel Decorative';
              font-weight: 900;
              src: url("./fonts/CinzelDecorative-Black.ttf");
            }
            
            @font-face {
              font-family: 'Trocchi';
              src: url("./fonts/Trocchi-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Fresca';
              src: url("./fonts/Fresca-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Empirez';
              src: url("./fonts/Empirez.ttf");
            }
          
            @font-face {
              font-family: 'Mouse Deco';
              src: url("./fonts/Mouse_Deco.ttf");
            }
          
            @font-face {
              font-family: 'Neucha';
              src: url("./fonts/Neucha-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Neon Nanoborg';
              src: url("./fonts/Neon Nanoborg.otf");
            }
            
            @font-face {
              font-family: 'Rose Cake - Personal Use';
              src: url("./fonts/Rose Cake - Personal Use.woff");
            }
            
            @font-face {
              font-family: 'Courier Prime';
              src: url("./fonts/CourierPrime-Regular.ttf");
            }

            @font-face {
              font-family: 'Minecrafter';
              src: url("./fonts/Minecrafter.Reg.ttf");
            }
            
            @font-face {
              font-family: 'ZCOOL KuaiLe';
              src: url("./fonts/ZCOOLKuaiLe-Regular.ttf");
            }
              
            @font-face {
              font-family: 'Finger Paint';
              src: url("./fonts/FingerPaint-Regular.ttf");
            }
               
            @font-face {
              font-family: 'Finger Paint';
              src: url("./fonts/FingerPaint-Regular.ttf");
            }
                
            @font-face {
              font-family: 'Biryani';
              src: url("./fonts/Biryani-Regular.ttf");
            }

            @font-face {
              font-family: 'Capriola';
              src: url("./fonts/Capriola-Regular.ttf");
            }

            @font-face {
              font-family: 'FresHot_DEMO';
              src: url("./fonts/FresHot_DEMO.ttf");
            }

            @font-face {
              font-family: 'Pilat Extended';
              src: url("./fonts/PilatExtended-Black.ttf");
            }

            @font-face {
              font-family: 'Armageda Wide';
              src: url("./fonts/Armageda Wide.ttf");
            }

            @font-face {
              font-family: 'Arial Black';
              src: url("./fonts/ariblk.ttf");
            }

            @font-face {
              font-family: 'Jura';
              src: url("./fonts/Jura-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Parabolic';
              src: url("./fonts/Parabolic.ttf");
            }

            @font-face {
              font-family: 'Days One';
              src: url("./fonts/DaysOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Basic';
              src: url("./fonts/Basic-Regular.ttf");
            }

            @font-face {
              font-family: 'League Gothic';
              src: url("./fonts/LeagueGothic-Regular.otf");
            }

            @font-face {
              font-family: 'ThickDeco';
              src: url("./fonts/ThickDeco.ttf");
            }

            @font-face {
              font-family: 'NATS';
              src: url("./fonts/NATS-Regular.woff");
            }

            @font-face {
              font-family: 'Noto Sans Armenian';
              src: url("./fonts/NotoSans-Regular.ttf");
            }

            @font-face {
              font-family: 'QuickSales';
              src: url("./fonts/QuickSales.ttf");
            }

            @font-face {
              font-family: 'Kite One';
              src: url("./fonts/KiteOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Junge';
              src: url("./fonts/Junge-Regular.ttf");
            }

            @font-face {
              font-family: 'Karla';
              src: url("./fonts/Karla-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Fasthand';
              src: url("./fonts/Fasthand-Regular.ttf");
              font-family: 'Rockabye';
              src: url("./fonts/Rockabye-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sanchez';
              src: url("./fonts/Sanchez-Regular.ttf");
              font-style: normal;
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Sanchez';
              font-style: italic;
              src: url("./fonts/Sanchez-Italic.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rosario';
              src: url("./fonts/Rosario-Regular.ttf");
              font-style: normal;
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Rosario';
              font-style: italic;
              src: url("./fonts/Rosario-Italic.ttf");
              font-weight: 400;
            }
           
            @font-face {
              font-family: 'B612';
              src: url("./fonts/B612-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Miama';
              src: url("./fonts/Miama.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'THIS FONT IS EMPTY1';
              src: url("./fonts/THIS FONT IS EMPTY1.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'DigitalRiver';
              src: url("./fonts/DigitalRiver.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Damion';
              src: url("./fonts/Damion-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Single Day';
              src: url("./fonts/SingleDay-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Joti One';
              src: url("./fonts/JotiOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Cherry Bomb';
              src: url("./fonts/CherryBomb-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'THE AMAZING SPIDER-MAN';
              src: url("./fonts/The Amazing Spider-Man.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aclonica';
              src: url("./fonts/Aclonica-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Bahianita';
              src: url("./fonts/Bahianita-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Artypa';
              src: url("./fonts/Artypa-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'The ART';
              src: url("./fonts/THE ART.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arthure';
              src: url("./fonts/Arthure.ttf");
            }

            @font-face {
              font-family: 'Baloo Paaji 2';
              src: url("./fonts/BalooPaaji2-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Baloo Paaji 2';
              src: url("./fonts/BalooPaaji2-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Pixel Berry 08/84 Ltd.Edition';
              src: url("./fonts/Pixel_Berry_08_84_Ltd.Edition.TTF");
            }

            @font-face {
              font-family: 'TS Block';
              src: url("./fonts/TS Block Bold.ttf");
            }

            @font-face {
              font-family: 'Montserrat';
              src: url("./fonts/Montserrat-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Krungthep';
              src: url("./fonts/Krungthep.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Moonrising';
              src: url("./fonts/Moonrising.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url("./fonts/Montserrat-Bold.ttf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: 'Haarlem Deco DEMO';
              src: url("./fonts/Haarlem Deco DEMO.ttf");
            }

            @font-face {
              font-family: 'Delius';
              src: url("./fonts/Delius-Regular.ttf");
            }

            @font-face {
              font-family: 'Maker Van';
              src: url("./fonts/MakerVan-Regular.ttf");
            }

            @font-face {
              font-family: 'Reenie Beanie';
              src: url("./fonts/ReenieBeanie-Regular.ttf");
            }
            
            @font-face {
              font-family: 'Atures 100 PERSONAL USE ONLY';
              src: url("./fonts/Atures-100_PERSONAL_USE.ttf");
            }
            
            @font-face {
              font-family: 'Atures 900 PERSONAL USE ONLY';
              src: url("./fonts/Atures-900_PERSONAL_USE.ttf");
            }

            @font-face {
              font-family: 'Burst My Bubble';
              src: url("./fonts/BurstMyBubbleBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'PÕRTO';
              src: url("./fonts/PORTO.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Burst My Bubble';
              src: url("./fonts/BurstMyBubble.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Corben';
              src: url("./fonts/Corben-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Corben';
              src: url("./fonts/Corben-Bold.ttf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: 'Carme';
              src: url("./fonts/Carme-Regular.ttf");
            }

            @font-face {
              font-family: 'CropFontXtra';
              src: url("./fonts/CropFontXtra.ttf");
            }
            
            @font-face {
              font-family: 'Neon Lights';
              src: url("./fonts/neon2.ttf");
            }
            
            @font-face {
              font-family: 'Cinzel';
              src: url("./fonts/Cinzel-Black.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Decovar Alpha';
              src: url("./fonts/DecovarAlpha-VF.ttf");
            }

            @font-face {
              font-family: 'Galaxy Monkey';
              src: url("./fonts/galaxymonkey.ttf");
            }

            @font-face {
              font-family: 'XXII-ARMY';
              src: url("./fonts/XXIISTRAIGHT-ARMY.ttf");
            }

            @font-face {
              font-family: 'Fatcat';
              src: url("./fonts/FatCat.otf");
            }
   
            @font-face {
              font-family: 'DIN Alternate';
              src: url("./fonts/DINAlternate-Bold.woff");
            }
             
            @font-face {
              font-family: 'Think Thick';
              src: url("./fonts/Think Thick.ttf");
            }

            @font-face {
              font-family: 'Counter-Strike';
              src: url("./fonts/cs_regular.ttf");
            }

            @font-face {
              font-family: 'Homenaje';
              src: url("./fonts/Homenaje-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Honey and Raspberries';
              src: url("./fonts/Honey and Raspberries.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Antonio';
              src: url("./fonts/Antonio-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Antonio';
              src: url("./fonts/Antonio-Light.ttf");
              font-weight: 300;
            }

            @font-face {
              font-family: 'Anek Kannada';
              src: url("./fonts/AnekKannada-VariableFont_wdth,wght.ttf");
              font-weight: 300;
            }

            @font-face {
              font-family: 'Sudo Var';
              src: url("./fonts/Sudo-Regular.ttf");
              font-weight: 300;
            }

            @font-face {
              font-family: '04b_19';
              src: url("./fonts/04B_19__.TTF");
              font-weight: 300;
            }

            @font-face {
              font-family: 'Khmer';
              src: url("./fonts/Khmer-Regular.ttf");
              font-weight: 300;
            }

            @font-face {
              font-family: 'Strait';
              src: url("./fonts/Strait-Regular.ttf");
              font-weight: 300;
            }
          
            @font-face {
              font-family: 'Anton';
              src: url("./fonts/Anton-Regular.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Antic Didone';
              src: url("./fonts/AnticDidone-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Chivo';
              src: url("./fonts/Chivo-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Neon Vortex';
              src: url("./fonts/Neon Vortex.ttf");
            }

            @font-face {
              font-family: 'Lexend Giga';
              src: url("./fonts/LexendGiga-Regular.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Bellota Text';
              src: url("./fonts/BellotaText-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: "Graduate";
              src: url("./fonts/Graduate-Regular.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: "Geeza Pro";
              src: url("./fonts/Geeza Pro.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'News Cycle';
              src: url("./fonts/NewsCycle-Bold.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Ceviche One";
              src: url("./fonts/CevicheOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Evil Highway";
              src: url("./fonts/Evil Highway.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "SNOWBREAK";
              src: url("./fonts/SNOWBREAK.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Fragmentcore";
              src: url("./fonts/Fragmentcore.woff");
            }

            @font-face {
              font-family: "39Smooth";
              src: url("./fonts/39smooth.ttf");
            }

            @font-face {
              font-family: "VTKS Estilosa";
              src: url("./fonts/VTKS Estilosa.ttf");
            }

            @font-face {
              font-family: "fairy wings";
              src: url("./fonts/fairy wings.ttf");
            }

            @font-face {
              font-family: "Anime Inept";
              src: url("./fonts/Anime Inept.otf");
            }

            @font-face {
              font-family: "Marker Felt";
              src: url("./fonts/Marker Felt.ttf");
            }

            @font-face {
              font-family: "Ander Hedge";
              src: url("./fonts/Ander Hedge.ttf");
            }

            @font-face {
              font-family: "DJB Emilys Garden";
              src: url("./fonts/DJB Emilys Garden.ttf");
            }

            @font-face {
              font-family: "Digitalino";
              src: url("./fonts/Digitalino-rev11.otf");
            }

            @font-face {
              font-family: "Exodus Demo";
              src: url("./fonts/ExodusDemo.otf");
            }

            @font-face {
              font-family: "Nimbus-Sans-D-OT";
              src: url("./fonts/Nimbus-Sans-D-OT.ttf");
            }

            @font-face {
              font-family: "ExodusDemo-Regular";
              src: url("./fonts/ExodusDemo-Regular.otf");
            }

            @font-face {
              font-family: "Muna";
              font-weight: 700;
              src: url("./fonts/Muna-Bold.ttf");
            }

            @font-face {
              font-family: "CF Punk Fashion PERSONAL";
              src: url("./fonts/CF Punk Fashion PERSONAL.ttf");
            }

            @font-face {
              font-family: "Chinese Dragon";
              src: url("./fonts/ChineseDragon.ttf");
            }

            @font-face {
              font-family: "Ligconsolata";
              src: url("./fonts/Ligconsolata.ttf");
            }
              
            @font-face {
              font-family: "KoHo";
              src: url("./fonts/KoHo-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Brawler";
              src: url("./fonts/Brawler-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Bungee Shade";
              src: url("./fonts/BungeeShade-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Silom";
              src: url("./fonts/SilomBol.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Zilla Slab";
              src: url("./fonts/ZillaSlab-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Libre Barcode 39 Extended Text";
              src: url("./fonts/LibreBarcode39ExtendedText-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Mansalva";
              src: url("./fonts/Mansalva-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Arvo";
              src: url("./fonts/Arvo-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Pacifico";
              src: url("./fonts/Pacifico-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Big Shoulders Text";
              src: url("./fonts/BigShouldersText-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Walter Turncoat";
              src: url("./fonts/WalterTurncoat-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Trochut";
              src: url("./fonts/Trochut-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Africa";
              src: url("./fonts/Africa.woff");
              font-weight: 400;
            }

            @font-face {
              font-family: "Grenze";
              src: url("./fonts/Grenze-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Bayon";
              src: url("./fonts/Bayon-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Hanuman";
              src: url("./fonts/Hanuman-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "MixGiants";
              src: url("./fonts/MixGiants.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Dispence";
              src: url("./fonts/Dispence.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Jungle";
              src: url("./fonts/Jungle DF.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "PAC LIBERTAS";
              src: url("./fonts/PAC LIBERTAS font.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Saphira DEMO";
              src: url("./fonts/Saphira DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Public Secret DEMO";
              src: url("./fonts/Public Secret DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Hello Avocado";
              src: url("./fonts/Hello Avocado.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Thunder Trooper";
              src: url("./fonts/thundertrooper.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Doctor Glitch";
              src: url("./fonts/Doctor Glitch.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Poller One";
              src: url("./fonts/PollerOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Post No Bills Colombo";
              src: url("./fonts/PostNoBillsColombo-Regular.woff");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Post No Bills Colombo";
              src: url("./fonts/postnobillscolombo-bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: "Post No Bills Colombo";
              src: url("./fonts/PostNoBillsColombo-ExtraBold.ttf");
              font-weight: 800;
            }

            @font-face {
              font-family: "Krub";
              src: url("./fonts/Krub-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Porter Sans Block";
              src: url("./fonts/PorterSansBlock-Regular.woff");
              font-weight: 400;
            }

            @font-face {
              font-family: "Pavanam";
              src: url("./fonts/Pavanam-Regular.ttf");
            }

            @font-face {
              font-family: "Sora";
              src: url("./fonts/Sora-Regular.ttf");
            }

            @font-face {
              font-family: 'Thicker Trial';
              src: url('./fonts/Thicker-Black-trial.ttf');
              font-weight: 900;
            }
            
            @font-face {
              font-family: 'Super Thin';
              src: url('./fonts/Super Thin.ttf');
              font-weight: 400;
            }

            @font-face {
              font-family: 'Bodoni 72 Oldstyle';
              src: url('./fonts/Bodoni 72 OS.ttc');
            }

            @font-face {
              font-family: 'BM HANNA_TTF';
              src: url('./fonts/BM-HANNA.ttf');
            }

            @font-face {
              font-family: 'Umar College';
              src: url('./fonts/Umar College.ttf');
            }

            @font-face {
              font-family: 'Digital Numbers';
              font-style: normal;
              font-weight: normal;
              src: url('./fonts/DigitalNumbers-Regular.woff') format('woff');
            }

            @font-face {
              font-family: 'BAZAR COSTA';
              src: url('./fonts/BAZAR COSTA.ttf');
            }

            @font-face {
              font-family: 'MUSICNET';
              src: url('./fonts/MUSICNET.ttf');
            }

            @font-face {
              font-family: 'JMH Extra Wide';
              src: url('./fonts/JMH Extra Wide.ttf');
            }

            @font-face {
              font-family: 'Writers original';
              src: url('./fonts/writers_original.ttf');
            }

            @font-face {
              font-family: 'Strawberry';
              src: url('./fonts/Strawberry.ttf');
            }

            @font-face {
              font-family: 'Chalkduster';
              src: url('./fonts/Chalkduster.ttf');
            }

            @font-face {
              font-family: 'DARTHCHOWDER';
              src: url('./fonts/DARTHCHOWDER-normal.otf');
            }

            @font-face {
              font-family: 'Dro';
              src: url('./fonts/DroDEMO-KCFonts.ttf');
            }


            @font-face {
              font-family: 'Asul';
              src: url('./fonts/Asul-Regular.ttf');
            }

            @font-face {
              font-family: 'Zorque';
              src: url('./fonts/zorque.otf');
            }

            @font-face {
              font-family: 'DIN Condensed';
              font-weight: 700;
              src: url('./fonts/DINCondensed-Bold.ttf');
            }

            @font-face {
              font-family: 'SeoulHangang CBL';
              src: url('./fonts/SeoulHangangCondensed-BoldL.ttf');
            }

            @font-face {
              font-family: 'ROMANUS';
              src: url('./fonts/ROMANUS.otf');
            }

            @font-face {
              font-family: 'Bangla MN';
              src: url('./fonts/Bangla MN.ttf');
            }

            @font-face {
              font-family: 'POLYA Regular';
              src: url('./fonts/POLYA.otf');
            }

            @font-face {
              font-family: 'Wafer';
              src: url('./fonts/Wafer-Regular.ttf');
            }

            @font-face {
              font-family: 'Iowan Old Style';
              src: url("./fonts/Iowan Old Style.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Open Bars';
              src: url("./fonts/OpenBars.ttf");
            }

            @font-face {
              font-family: 'KyivType Sans';
              src: url("./fonts/Dmitry Rastvortsev - KyivType Sans Regular-.otf");
            }

            @font-face {
              font-family: 'Kumbh Sans';
              src: url("./fonts/KumbhSans-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Baloo Bhaina 2';
              src: url("./fonts/BalooBhaina2-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Dr Sugiyama';
              src: url("./fonts/DrSugiyama-Regular.ttf");
            }

            @font-face {
              font-family: 'Kiwi Maru';
              src: url("./fonts/KiwiMaru-Regular.ttf");
            }

            @font-face {
              font-family: 'Artifika';
              src: url("./fonts/Artifika-Regular.ttf");
            }

            @font-face {
              font-family: 'Imbue';
              src: url("./fonts/Imbue-VariableFont_opsz,wght.ttf");
            }

            @font-face {
              font-family: 'SFD';
              src: url("./fonts/Skateparx_Filled_Demo.otf");
            }

            @font-face {
              font-family: 'Reggae One';
              src: url("./fonts/ReggaeOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Simonetta';
              src: url("./fonts/Simonetta-Regular.ttf");
            }

            @font-face {
              font-family: 'Summer Love';
              src: url("./fonts/Summer Love.ttf");
            }

            @font-face {
              font-family: 'RCPU';
              src: url("./fonts/Rose Cake - Personal Use.otf");
            }

            @font-face {
              font-family: 'Skateboard Unlimited';
              src: url("./fonts/Skate Board Unlimited.ttf");
            }

            @font-face {
              font-family: 'IBM Plex Mono';
              src: url("./fonts/IBMPlexMono-Regular.ttf");
            }

            @font-face {
              font-family: 'Berkeley Mono Trial';
              src: url("./fonts/JetBrainsMono-Regular.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Mad Mecha';
              src: url("./fonts/Mad Mecha.ttf");
            }

            @font-face {
              font-family: 'Elysian Fields';
              src: url("./fonts/Elysian Fields.otf");
            }

            @font-face {
              font-family: 'BLINKIES';
              src: url("./fonts/BLINKIES.ttf");
            }

            @font-face {
              font-family: 'Cochin';
              src: url("./fonts/Cochin-LT-Font.ttf");
            }

            @font-face {
              font-family: 'Lunch';
              src: url("./fonts/LUNCH.ttf");
            }

            @font-face {
              font-family: 'Gemunu Libre';
              font-weight: 400;
              src: url("./fonts/GemunuLibre-Regular.ttf");
            }

            @font-face {
              font-family: 'Gemunu Libre';
              font-weight: 600;
              src: url("./fonts/GemunuLibre-SemiBold.ttf");
            }

            @font-face {
              font-family: 'Planet Benson';
              font-weight: 600;
              src: url("./fonts/planet benson 2.ttf");
            }

            @font-face {
              font-family: 'Karla Tamil Upright';
              font-weight: 400;
              src: url("./fonts/Karla Tamil Upright 400.ttf");
            }

            @font-face {
              font-family: 'Night Trippers';
              font-weight: 400;
              src: url("./fonts/Night Trippers.otf");
            }

            @font-face {
              font-family: 'Shadows Into Light';
              font-weight: 400;
              src: url("./fonts/ShadowsIntoLight-Regular.ttf");
            }

            @font-face {
              font-family: 'Snowburst One';
              font-weight: 400;
              src: url("./fonts/SnowburstOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Sofadi One';
              font-weight: 400;
              src: url("./fonts/SofadiOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Balthazar';
              font-weight: 400;
              src: url("./fonts/Balthazar-Regular.ttf");
            }

            @font-face {
              font-family: 'Baloo Tammudu';
              font-weight: 400;
              src: url("./fonts/BalooTammudu2-Bold.ttf");
            }

            @font-face {
              font-family: 'Baloo';
              src: url("./fonts/Baloo-Regular.ttf");
            }

            @font-face {
              font-family: 'Archivo Black';
              font-weight: 400;
              src: url("./fonts/ArchivoBlack-Regular.ttf");
            }

            @font-face {
              font-family: 'McLaren';
              font-weight: 400;
              src: url("./fonts/McLaren-Regular.ttf");
            }

            @font-face {
              font-family: 'Exo';
              font-weight: 400;
              src: url("./fonts/Exo-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Astral Groove';
              font-weight: 400;
              src: url("./fonts/Astral Groove.ttf");
            }

            @font-face {
              font-family: 'Berkeley';
              font-weight: 400;
              src: url("./fonts/BerkeleyMonoTrial-Regular.ttf");
            }

            @font-face {
              font-family: 'HamburgerHeaven';
              font-weight: 400;
              src: url("./fonts/HAMBH___.TTF");
            }

            @font-face {
              font-family: 'CantoraOne';
              font-weight: 400;
              src: url("./fonts/CantoraOne-Regular.ttf");
            }
            
            @font-face {
              font-family: 'Johnny Long';
              font-weight: 400;
              src: url("./fonts/JohnnyLong.ttf");
            }
            
            @font-face {
              font-family: 'Reguler';
              font-weight: 400;
              src: url("./fonts/FragilleReguler-lgLVd.otf");
            }
            
            @font-face {
              font-family: 'Wicked Halloween';
              font-weight: 400;
              src: url("./fonts/Wicked Halloween.ttf");
            }
            
            @font-face {
              font-family: 'Andada SC';
              font-weight: 400;
              src: url("./fonts/AndadaSC-Regular.otf");
            }
            
            @font-face {
              font-family: 'Abyssinica SIL';
              font-weight: 400;
              src: url("./fonts/AbyssinicaSIL-R.ttf");
            }
            
            @font-face {
              font-family: 'Bad Land';
              font-weight: 400;
              src: url("./fonts/Bad Land.otf");
            }
            
            @font-face {
              font-family: 'Rasa';
              font-weight: 400;
              src: url("./fonts/Rasa-Regular.ttf");
            }

            @font-face {
              font-family: 'Rubik One';
              src: url("./fonts/RubikOne-Regular.ttf");
            }
            
            @font-face {
              font-family: 'Savoye LET';
              src: url("./fonts/Savoye LET Plain.ttf");
            }

            @font-face {
              font-family: 'Ponnala';
              src: url("./fonts/Ponnala-Regular.woff");
            }

            @font-face {
              font-family: 'Myanmar Khyay';
              src: url("./fonts/Khyay-Regular.ttf");
            }

            @font-face {
              font-family: 'Rakkas';
              src: url("./fonts/Rakkas-Regular.ttf");
            }

            @font-face {
              font-family: 'Sree Krushnadevaraya';
              src: url("./fonts/SreeKrushnadevaraya-Regular.ttf");
            }

            @font-face {
              font-family: 'Stint Ultra Expanded';
              src: url("./fonts/StintUltraExpanded-Regular.ttf");
            }

            @font-face {
              font-family: 'Kristi';
              src: url("./fonts/Kristi-Regular.ttf");
            }

            @font-face {
              font-family: 'Dokdo';
              src: url("./fonts/Dokdo-Regular.ttf");
            }

            @font-face {
              font-family: 'Germania One';
              src: url("./fonts/GermaniaOne-Regular.ttf");
            }
            
            @font-face {
              font-family: 'OFL Sorts Mill Goudy TT';
              font-style: italic;
              src: url("./fonts/OFLGoudyStMTT-Italic.ttf");
            }
            
            @font-face {
              font-family: 'MODERN CRAFT';
              font-weight: 700;
              src: url("./fonts/MODERN CRAFT-Bold.otf");
            }
            
            @font-face {
              font-family: 'MadHouse';
              src: url("./fonts/MadHouse-Sans.otf");
            }
            
            @font-face {
              font-family: "The ART-Light";
              src: url("./fonts/The ART-Light.ttf");
            }
            
            @font-face {
              font-family: "PartyLET";
              src: url("./fonts/party_let.ttf");
            }
            
            @font-face {
              font-family: "Dripping Drops";
              src: url("./fonts/DrippingDrops-PKPyx.otf");
            }
            
            @font-face {
              font-family: "Sofia Sans";
              font-weight: normal;
              font-style: normal;
              src: url("./fonts/SofiaSans-Regular.otf");
            }
            
            @font-face {
              font-family: "Chickens Lovers";
              src: url("./fonts/Chickens Lovers.otf");
            }
            
            @font-face {
              font-family: "Gardena";
              src: url("./fonts/Gardena.ttf");
            }
            
            @font-face {
              font-family: "PlayMeGames";
              src: url("./fonts/PlayMeGames-Demo.otf");
            }
            
            @font-face {
              font-family: "TharLon";
              src: url("./fonts/Tharlon-Regular.ttf");
            }
            
            @font-face {
              font-family: "Southland";
              src: url("./fonts/Southland TTF.ttf");
            }
            
            @font-face {
              font-family: "Bhavuka";
              src: url("./fonts/Bhavuka Regular.ttf");
            }
            
            @font-face {
              font-family: "TypoGraphica";
              src: url("./fonts/TypoGraphica_demo.otf");
            }
            
            @font-face {
              font-family: "Bruno Ace";
              src: url("./fonts/Bruno Ace Regular.ttf");
            }
            
            @font-face {
              font-family: "Lao MN";
              src: url("./fonts/Lao MN.ttc");
            }

            @font-face {
              font-family: "Azeret Mono";
              src: url("./fonts/AzeretMono-VariableFont_wght.ttf");
            }
            
            @font-face {
              font-family: "BROKENZ";
              src: url("./fonts/BROKENZ.ttf");
            }
            
            @font-face {
              font-family: "Sansita One";
              src: url("./fonts/SansitaOne.ttf");
            }
            
            @font-face {
              font-family: "Sansation";
              font-weight: normal;
              src: url("./fonts/Sansation_Regular.ttf");
            }
            
            @font-face {
              font-family: "Son Of A Glitch";
              font-style: normal;
              src: url("./fonts/Son Of A Glitch.ttf");
            }
            
            @font-face {
              font-family: "Son Of A Glitch";
              font-style: italic;
              src: url("./fonts/Son Of A Glitch Italic.ttf");
            }

            @font-face {
              font-family: 'NewYork';
              src: url("./fonts/NewYork.otf");
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
