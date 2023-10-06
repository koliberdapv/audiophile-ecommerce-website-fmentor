import mobile_img_product from '../../assets/product-xx59-headphones/mobile/image-product.jpg';
import mobile_img_gallery_1 from '../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg';
import mobile_img_gallery_2 from '../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg';
import mobile_img_gallery_3 from '../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg';
import tablet_img_product from '../../assets/product-xx59-headphones/tablet/image-product.jpg';
import tablet_img_gallery_1 from '../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg';
import tablet_img_gallery_2 from '../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg';
import tablet_img_gallery_3 from '../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg';
import desktop_img_product from '../../assets/product-xx59-headphones/desktop/image-product.jpg';
import desktop_img_gallery_1 from '../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import desktop_img_gallery_2 from '../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import desktop_img_gallery_3 from '../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

const productFullInfo = {
  info: {
    images: {
      mobile: mobile_img_product,
      tablet: tablet_img_product,
      desktop: desktop_img_product,
    },
    name: 'XX59 Headphones',
    isNew: false,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  },
  about: {
    features: [
      `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.`,
      `More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
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
      alt: 'a beautiful woman is vibing in a headphones',
    },
    {
      mobile: mobile_img_gallery_2,
      tablet: tablet_img_gallery_2,
      desktop: desktop_img_gallery_2,
      alt: 'a headphones up-close',
    },
    {
      mobile: mobile_img_gallery_3,
      tablet: tablet_img_gallery_3,
      desktop: desktop_img_gallery_3,
      alt: `a headphones hanged on the arm of a person`,
    },
  ],
  recommendations: ['XX99 Mark II', 'XX99 Mark I', 'ZX9 Speaker'],
};

export default productFullInfo;
