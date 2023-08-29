import { memo } from 'react';
import Aboutsemen1 from './Aboutsemen1';
import Aboutsemen2 from './Aboutsemen2';
import Aboutsemen3 from './Aboutsemen3';
import Aboutsemen4 from './Aboutsemen4';
import Aboutsemen5 from './Aboutsemen5';
import Close from './Close';
import FooterLogo from './FooterLogo';
import HomeButton from './HomeButton';
import KeyBubble1 from './KeyBubble1';
import KeyBubble3 from './KeyBubble3';
import KeyBubble2 from './KeyBubble2';
import KeyBubble4 from './KeyBubble4';
import KeyBubble5 from './KeyBubble5';
import KeyBubble6 from './KeyBubble6';
import KeyBubble7 from './KeyBubble7';
import KeyBubble8 from './KeyBubble8';
import Keyplus from './Keyplus';
import MicroStick from './MicroStick';
import PopupRightButton from './PopupRightButton';
import TitleBacterium1 from './TitleBacterium1';
import TitleBacterium2 from './TitleBacterium2';
import TitleBacterium3 from './TitleBacterium3';
import TitleBacterium4 from './TitleBacterium4';
import TitleBacterium5 from './TitleBacterium5';
import TitleBacterium6 from './TitleBacterium6';
import TitleLargePinkSemen from './TitleLargePinkSemen';
import TitleSmallSemen from './TitleSmallSemen';

export const IconTypes = {
  about: {
    ABOUTSEMEN1: 'ABOUTSEMEN1',
    ABOUTSEMEN2: 'ABOUTSEMEN2',
    ABOUTSEMEN3: 'ABOUTSEMEN3',
    ABOUTSEMEN4: 'ABOUTSEMEN4',
    ABOUTSEMEN5: 'ABOUTSEMEN5',
  },

  keyBubbles: {
    KEYBUBBLE1: 'KEYBUBBLE1',
    KEYBUBBLE2: 'KEYBUBBLE2',
    KEYBUBBLE3: 'KEYBUBBLE3',
    KEYBUBBLE4: 'KEYBUBBLE4',
    KEYBUBBLE5: 'KEYBUBBLE5',
    KEYBUBBLE6: 'KEYBUBBLE6',
    KEYBUBBLE7: 'KEYBUBBLE7',
    KEYBUBBLE8: 'KEYBUBBLE8',
  },

  title: {
    TITLE_BACTERIUM1: 'TITLE_BACTERIUM1',
    TITLE_BACTERIUM2: 'TITLE_BACTERIUM2',
    TITLE_BACTERIUM3: 'TITLE_BACTERIUM3',
    TITLE_BACTERIUM4: 'TITLE_BACTERIUM4',
    TITLE_BACTERIUM5: 'TITLE_BACTERIUM5',
    TITLE_BACTERIUM6: 'TITLE_BACTERIUM6',
    TITLE_LARGE_PINK_SEMEN: 'TITLE_LARGE_PINK_SEMEN',
    TITLE_SMALL_SEMEN: 'TITLE_SMALL_SEMEN'
  },

  footer: {
    FOOTER_LOGO: 'FOOTER_LOGO',
  },

  home: {
    HOME_BUTTON: 'HOME_BUTTON',
  },

  popup: {
    POPUP_RIGHT_BUTTON: 'POPUP_RIGHT_BUTTON',
  },

  other: {
    CLOSE: 'ICON_CLOSE',
    KEY_PLUS: 'KEY_PLUS',
    MICRO_STICK: 'MICRO_STICK',
  },
};

const Icon = ({ name, className, ...rest }) => {
  const classNameConcat = ['svg-icon'];
  if (className) {
    classNameConcat.push(className);
  }

  switch (name) {
    // ABOUT ICONS
    case IconTypes.about.ABOUTSEMEN1:
        return <Aboutsemen1 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.about.ABOUTSEMEN2:
        return <Aboutsemen2 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.about.ABOUTSEMEN3:
        return <Aboutsemen3 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.about.ABOUTSEMEN4:
        return <Aboutsemen4 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.about.ABOUTSEMEN5:
        return <Aboutsemen5 className={`${classNameConcat.join(' ')}`} {...rest} />;

    // KEYBUBLES ICONS
    case IconTypes.keyBubbles.KEYBUBBLE1:
        return <KeyBubble1 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.keyBubbles.KEYBUBBLE2:
        return <KeyBubble2 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.keyBubbles.KEYBUBBLE3:
        return <KeyBubble3 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.keyBubbles.KEYBUBBLE4:
        return <KeyBubble4 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.keyBubbles.KEYBUBBLE5:
        return <KeyBubble5 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.keyBubbles.KEYBUBBLE6:
        return <KeyBubble6 className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.keyBubbles.KEYBUBBLE7:
        return <KeyBubble7 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.keyBubbles.KEYBUBBLE8:
        return <KeyBubble8 className={`${classNameConcat.join(' ')}`} {...rest} />

    //Title ICONS
    case IconTypes.title.TITLE_BACTERIUM1:
        return <TitleBacterium1 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.title.TITLE_BACTERIUM2:
        return <TitleBacterium2 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.title.TITLE_BACTERIUM3:
        return <TitleBacterium3 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.title.TITLE_BACTERIUM4:
        return <TitleBacterium4 className={`${classNameConcat.join(' ')}`} {...rest} />    
    case IconTypes.title.TITLE_BACTERIUM5:
        return <TitleBacterium5 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.title.TITLE_BACTERIUM6:
        return <TitleBacterium6 className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.title.TITLE_LARGE_PINK_SEMEN:
        return <TitleLargePinkSemen className={`${classNameConcat.join(' ')}`} {...rest} />
    case IconTypes.title.TITLE_SMALL_SEMEN:
        return <TitleSmallSemen className={`${classNameConcat.join(' ')}`} {...rest} />

    // FOOTER ICONS
    case IconTypes.footer.FOOTER_LOGO:
        return <FooterLogo className={`${classNameConcat.join(' ')}`} {...rest} />;
    
    // HOME ICONS
    case IconTypes.home.HOME_BUTTON:
        return <HomeButton className={`${classNameConcat.join(' ')}`} {...rest} />;

    // POPUP ICONS
    case IconTypes.other.POPUP_RIGHT_BUTTON:
        return <PopupRightButton className={`${classNameConcat.join(' ')}`} {...rest} />;

    // OTHER ICONS
    case IconTypes.other.CLOSE:
        return <Close className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.other.KEY_PLUS:
        return <Keyplus className={`${classNameConcat.join(' ')}`} {...rest} />;
    case IconTypes.other.MICRO_STICK:
        return <MicroStick className={`${classNameConcat.join(' ')}`} {...rest} />;
    
    default:
      return <></>;
  }
};

export default memo(Icon);
