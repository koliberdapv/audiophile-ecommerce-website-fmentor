import mobile_img_product from '../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import mobile_img_gallery_1 from '../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg';
import mobile_img_gallery_2 from '../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg';
import mobile_img_gallery_3 from '../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg';
import tablet_img_product from '../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg';
import tablet_img_gallery_1 from '../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg';
import tablet_img_gallery_2 from '../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg';
import tablet_img_gallery_3 from '../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg';
import desktop_img_product from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import desktop_img_gallery_1 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import desktop_img_gallery_2 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import desktop_img_gallery_3 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

const productFullInfo = {
  info: {
    images: {
      mobile: mobile_img_product,
      tablet: tablet_img_product,
      desktop: desktop_img_product,
    },
    name: 'XX99 Mark I Headphones',
    isNew: false,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  },
  about: {
    features: [
      `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancelation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    inTheBox: [
      {
        equipmentName: 'headphone unit',
        quantity: 1,
      },
      {
        equipmentName: 'replacement earcups',
        quantity: 2,
      },
      {
        equipmentName: 'user manual',
        quantity: 1,
      },
      {
        equipmentName: '3.5mm 5m audio cable',
        quantity: 1,
      },
    ],
  },
  images: [
    {
      mobile: mobile_img_gallery_1,
      tablet: tablet_img_gallery_1,
      desktop: desktop_img_gallery_1,
      alt: 'a headphones hanged of the microphone stand',
    },
    {
      mobile: mobile_img_gallery_2,
      tablet: tablet_img_gallery_2,
      desktop: desktop_img_gallery_2,
      alt: 'a table with a shoe, AppleWatch, and headphones on it',
    },
    {
      mobile: mobile_img_gallery_3,
      tablet: tablet_img_gallery_3,
      desktop: desktop_img_gallery_3,
      alt: `headphones' earcups close-up`,
    },
  ],
  recommendations: ['XX99 Mark II', 'XX59', 'ZX9 Speaker'],
};

export default productFullInfo;
