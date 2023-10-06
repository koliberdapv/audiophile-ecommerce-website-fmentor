import mobile_img_product from '../../assets/product-yx1-earphones/mobile/image-product.jpg';
import mobile_img_gallery_1 from '../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg';
import mobile_img_gallery_2 from '../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg';
import mobile_img_gallery_3 from '../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg';
import tablet_img_product from '../../assets/product-yx1-earphones/tablet/image-product.jpg';
import tablet_img_gallery_1 from '../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg';
import tablet_img_gallery_2 from '../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg';
import tablet_img_gallery_3 from '../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg';
import desktop_img_product from '../../assets/product-yx1-earphones/desktop/image-product.jpg';
import desktop_img_gallery_1 from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import desktop_img_gallery_2 from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import desktop_img_gallery_3 from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

const productFullInfo = {
  info: {
    images: {
      mobile: mobile_img_product,
      tablet: tablet_img_product,
      desktop: desktop_img_product,
    },
    name: 'YX1 Wireless Earphones',
    isNew: true,
    description: `Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.`,
  },
  about: {
    features: [
      `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.`,
      `The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and gray color scheme as well as the popular classic black.`,
    ],
    inTheBox: [
      {
        equipmentName: 'earphone unit',
        quantity: 2,
      },
      {
        equipmentName: 'multi-size earplugs',
        quantity: 6,
      },
      {
        equipmentName: 'user manual',
        quantity: 1,
      },
      {
        equipmentName: 'USB-C charging cable',
        quantity: 1,
      },
      {
        equipmentName: 'travel pouch',
        quantity: 1,
      },
    ],
  },
  images: [
    {
      mobile: mobile_img_gallery_1,
      tablet: tablet_img_gallery_1,
      desktop: desktop_img_gallery_1,
      alt: 'a pair of earbuds up-close',
    },
    {
      mobile: mobile_img_gallery_2,
      tablet: tablet_img_gallery_2,
      desktop: desktop_img_gallery_2,
      alt: 'a pair of earbuds in the charging case',
    },
    {
      mobile: mobile_img_gallery_3,
      tablet: tablet_img_gallery_3,
      desktop: desktop_img_gallery_3,
      alt: `a pair of earbuds and a charging case aside`,
    },
  ],
  recommendations: ['XX99 Mark I', 'XX59', 'ZX7 Speaker'],
};

export default productFullInfo;
