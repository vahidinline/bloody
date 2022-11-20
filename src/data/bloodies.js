const list = [
  {
    id: '1',
    name: 'ابراهیم کتابدار',
    Age: '29',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V062_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V062_large.jpg',
  },
  {
    id: '2',
    name: 'ابراهیم مرادی',
    Age: '21',
    Date: '۲۵ آبان ۹۸',
    Location: 'جوانرود، کرمانشاه',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V065_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V065_large.jpg',
  },
  {
    id: '3',
    name: 'ابراهیم مطوری',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'آبادان، خوزستان',
    Cause: 'اصابت گلوله به پشت و سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V061_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V061_large.jpg',
  },
  {
    id: '4',
    name: 'ابراهیم منصوری',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'یزدانشهر، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V063_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V063_large.jpg',
  },
  {
    id: '5',
    name: 'ابراهیم مهدی پور',
    Age: '50',
    Date: '۲۵ آبان ۹۸',
    Location: 'اندیشه، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V064_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V064_large.jpg',
  },
  {
    id: '6',
    name: 'ابوالفضل شعبانی',
    Age: '۱۶ یا ۱۷',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V007_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V007_large.jpg',
  },
  {
    id: '7',
    name: 'احد بشاره دورقی',
    Age: '22',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به پشت یا پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V009_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V009_large.jpg',
  },
  {
    id: '8',
    name: 'احسان شیری',
    Age: '۳۰ تا ۳۵',
    Date: '۲۶ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V067_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V067_large.jpg',
  },
  {
    id: '9',
    name: 'احسان عبدالله نژاد',
    Age: '28',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهبهان، خوزستان',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V066_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V066_large.jpg',
  },
  {
    id: '10',
    name: 'احمد چراغیان',
    Age: '40',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به بازو و قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V010_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V010_large.jpg',
  },
  {
    id: '11',
    name: 'احمد خواجه آلبوعلی (ادریس)',
    Age: '17',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V013_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V013_large.jpg',
  },
  {
    id: '12',
    name: 'احمد سعدی (جعاوله)',
    Age: 'نامشخص (احتمالا 17 ساله)',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شوشتر، خوزستان',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V219_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V219_large.jpg',
  },
  {
    id: '13',
    name: 'احمد قربانی دستجردی',
    Age: '34',
    Date: '۲۷ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V011_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V011_large.jpg',
  },
  {
    id: '14',
    name: 'آذر میرزاپور',
    Age: '49',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V049_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V049_large.jpg',
  },
  {
    id: '15',
    name: 'آرش کهزادی',
    Age: '16',
    Date: '۲۷ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V039_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V039_large.jpg',
  },
  {
    id: '16',
    name: 'آرشام ابراهیمی',
    Age: '21',
    Date: '۲۵ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله به پشت',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V043_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V043_large.jpg',
  },
  {
    id: '17',
    name: 'آرمان (نیما) امانی',
    Age: '20',
    Date: '۲۶ آبان ۹۸',
    Location: 'یزدانشهر، اصفهان',
    Cause: 'اصابت گلوله به پشت و سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V041_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V041_large.jpg',
  },
  {
    id: '18',
    name: 'آرمین قادری',
    Age: '15',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V042_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V042_large.jpg',
  },
  {
    id: '19',
    name: 'آریان رجبی',
    Age: '19',
    Date: '۲۵ آبان ۹۸',
    Location: 'مریوان، کردستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V040_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V040_large.jpg',
  },
  {
    id: '20',
    name: 'آزاده ضربی',
    Age: '26',
    Date: '۲۵ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V048_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V048_large.jpg',
  },
  {
    id: '21',
    name: 'اسماعیل الله قلی￼￼',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V074_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V074_large.jpg',
  },
  {
    id: '22',
    name: 'اسماعیل رضایی',
    Age: '30',
    Date: '۲۶ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V072_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V072_large.jpg',
  },
  {
    id: '23',
    name: 'اسماعیل شجاعی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'رباط کریم، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V073_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V073_large.jpg',
  },
  {
    id: '24',
    name: 'اسماعیل عرب احمدی',
    Age: '28',
    Date: '۲۵ آبان ۹۸',
    Location: 'تهران، تهران',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V070_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V070_large.jpg',
  },
  {
    id: '25',
    name: 'اسماعیل قلی پور',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V071_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V071_large.jpg',
  },
  {
    id: '26',
    name: 'اشکان خمره ای',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'مشکین دشت، البرز',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V045_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V045_large.jpg',
  },
  {
    id: '27',
    name: 'آشور کلتا',
    Age: '37',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به بالا تنه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V046_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V046_large.jpg',
  },
  {
    id: '28',
    name: 'اصغر لشگری',
    Age: '25',
    Date: '۲۶ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V044_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V044_large.jpg',
  },
  {
    id: '29',
    name: 'اقبال اسماعیلی',
    Age: '45',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V068_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V068_large.jpg',
  },
  {
    id: '30',
    name: 'اکبر لنگری',
    Age: '23',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V014_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V014_large.jpg',
  },
  {
    id: '31',
    name: 'الخمیسی (نام کوچک نامشخص)',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'رامهرمز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V032_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V032_large.jpg',
  },
  {
    id: '32',
    name: 'آمنه شهبازی فرد',
    Age: '35',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سر و گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V033_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V033_large.jpg',
  },
  {
    id: '33',
    name: 'امید صالحی',
    Age: '21',
    Date: '۲۵ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به گردن و شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V187_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V187_large.jpg',
  },
  {
    id: '34',
    name: 'امید فلاحتی',
    Age: '29',
    Date: '۲۶ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V186_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V186_large.jpg',
  },
  {
    id: '35',
    name: 'امیر (شاهپور) اوجانی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'پرند، تهران',
    Cause: 'اصابت گلوله به پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V034_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V034_large.jpg',
  },
  {
    id: '36',
    name: 'امیر الوندی مهر',
    Age: '25',
    Date: '۲۶ آبان ۹۸',
    Location: 'گویم، فارس',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V035_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V035_large.jpg',
  },
  {
    id: '37',
    name: 'امیرحسین داودوند',
    Age: '۱۶ یا ۱۷',
    Date: '۲۶ آبان ۹۸',
    Location: 'یزدانشهر، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V036_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V036_large.jpg',
  },
  {
    id: '38',
    name: 'امیرحسین کبیری',
    Age: '33',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V037_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V037_large.jpg',
  },
  {
    id: '39',
    name: 'امیررضا عبداللهی',
    Age: '13',
    Date: '۲۵ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V038_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V038_large.jpg',
  },
  {
    id: '40',
    name: 'ایوب بهرامیان',
    Age: '35',
    Date: '۲۵ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V047_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V047_large.jpg',
  },
  {
    id: '41',
    name: 'برهان منصورنیا',
    Age: '28',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V058_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V058_large.jpg',
  },
  {
    id: '42',
    name: 'بنی رشید (نام کوچک نامشخص)',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'رامهرمز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V052_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V052_large.jpg',
  },
  {
    id: '43',
    name: 'بهروز اصغرپور',
    Age: '27',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V053_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V053_large.jpg',
  },
  {
    id: '44',
    name: 'بهروز ملکی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'مریوان، کردستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V055_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V055_large.jpg',
  },
  {
    id: '45',
    name: 'بهزاد صفرزاده',
    Age: '27',
    Date: '۲۵ آبان ۹۸',
    Location: 'نسیم شهر، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V057_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V057_large.jpg',
  },
  {
    id: '46',
    name: 'بهزاد معینی فر',
    Age: '27',
    Date: '۲۶ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V056_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V056_large.jpg',
  },
  {
    id: '47',
    name: 'بهمن جعفری',
    Age: '28',
    Date: '۲۶ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله به قلب و شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V051_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V051_large.jpg',
  },
  {
    id: '48',
    name: 'پدرام جعفری کمیجانی',
    Age: '18',
    Date: '۲۷ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V189_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V189_large.jpg',
  },
  {
    id: '49',
    name: 'پژمان (علی) قلیپور ملاطی',
    Age: '19',
    Date: '۲۷ آبان ۹۸',
    Location: 'اندیشه، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V190_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V190_large.jpg',
  },
  {
    id: '50',
    name: 'پوریا ناصریخواه',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله به سر و پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V191_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V191_large.jpg',
  },
  {
    id: '51',
    name: 'پویا بختیاری',
    Age: '27',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V192_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V192_large.jpg',
  },
  {
    id: '52',
    name: 'جاوید میرزایی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'رباط کریم، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V105_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V105_large.jpg',
  },
  {
    id: '53',
    name: 'جبار تجاره',
    Age: '38',
    Date: '۲۵ آبان ۹۸',
    Location: 'جوانرود، کرمانشاه',
    Cause: 'اصابت گلوله به پشت',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V101_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V101_large.jpg',
  },
  {
    id: '54',
    name: 'جلیل امام قلی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V218_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V218_large.jpg',
  },
  {
    id: '55',
    name: 'جواد بابایی زاده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله به شکم، گردن و سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V102_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V102_large.jpg',
  },
  {
    id: '56',
    name: 'جواد شیازی',
    Age: '26',
    Date: '۲۵ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V104_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V104_large.jpg',
  },
  {
    id: '57',
    name: 'جواد نظری فتح آبادی',
    Age: 'نامشخص',
    Date: '۲۴ آبان ۹۸',
    Location: 'سیرجان، کرمان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V103_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V103_large.jpg',
  },
  {
    id: '58',
    name: 'چنعانی (نام کوچک نامشخص)',
    Age: '۸ تا ۱۲',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V059_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V059_large.jpg',
  },
  {
    id: '59',
    name: 'حسام بارانی راد',
    Age: '17',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V095_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V095_large.jpg',
  },
  {
    id: '60',
    name: 'حسن صحرایی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V093_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V093_large.jpg',
  },
  {
    id: '61',
    name: 'حسن طاووسی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V094_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V094_large.jpg',
  },
  {
    id: '62',
    name: 'حسن علیزاده',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V091_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V091_large.jpg',
  },
  {
    id: '63',
    name: 'حسن غزلاوی',
    Age: '27',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'خرمشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V092_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V092_large.jpg',
  },
  {
    id: '64',
    name: 'حسین آبروی',
    Age: 'نامشخص',
    Date: '۲۴ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V193_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V193_large.jpg',
  },
  {
    id: '65',
    name: 'حسین حیدری',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V099_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V099_large.jpg',
  },
  {
    id: '66',
    name: 'حسین قاسمی',
    Age: '19',
    Date: '۲۶ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله به قلب و پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V098_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V098_large.jpg',
  },
  {
    id: '67',
    name: 'حسین قدمی',
    Age: '30',
    Date: '۲۵ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به شکم و پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V097_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V097_large.jpg',
  },
  {
    id: '68',
    name: 'حسین کریمی علویجه',
    Age: '51',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملکشهر، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V100_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V100_large.jpg',
  },
  {
    id: '69',
    name: 'حمزه البریهی',
    Age: '17',
    Date: '۲۴ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V088_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V088_large.jpg',
  },
  {
    id: '70',
    name: 'حمزه سواری',
    Age: '۲۲ تا ۲۵',
    Date: '۲۵ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله به شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V090_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V090_large.jpg',
  },
  {
    id: '71',
    name: 'حمزه علی نعمتی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V087_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V087_large.jpg',
  },
  {
    id: '72',
    name: 'حمزه فرجی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V089_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V089_large.jpg',
  },
  {
    id: '73',
    name: 'حمید رسولی',
    Age: '32',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به قلب و شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V083_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V083_large.jpg',
  },
  {
    id: '74',
    name: 'حمید شریفی',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V084_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V084_large.jpg',
  },
  {
    id: '75',
    name: 'حمید طاهری',
    Age: '35',
    Date: '۲۵ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله به سینه و قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V220_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V220_large.jpg',
  },
  {
    id: '76',
    name: 'حمیدرضا حسینی￼￼',
    Age: '30',
    Date: '۲۵ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V086_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V086_large.jpg',
  },
  {
    id: '77',
    name: 'حمیدرضا قبولی',
    Age: '19',
    Date: '۲۷ آبان ۹۸',
    Location: 'اندیشه، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V085_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V085_large.jpg',
  },
  {
    id: '78',
    name: 'حیدرعلی رمضان نژاد',
    Age: '53',
    Date: '۲۵ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله به شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V096_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V096_large.jpg',
  },
  {
    id: '79',
    name: 'خالد غزلاوی',
    Age: '16',
    Date: '۲۵ آبان ۹۸',
    Location: 'خرمشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V108_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V108_large.jpg',
  },
  {
    id: '80',
    name: 'دانیال استواری',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'مریوان، کردستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V060_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V060_large.jpg',
  },
  {
    id: '81',
    name: 'رامین لمسه',
    Age: '28',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V195_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V195_large.jpg',
  },
  {
    id: '82',
    name: 'رحیم امین آبادی',
    Age: '35',
    Date: '۲۶ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V194_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V194_large.jpg',
  },
  {
    id: '83',
    name: 'رزاق ناصرزاده',
    Age: '38',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V199_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V199_large.jpg',
  },
  {
    id: '84',
    name: 'رسول امانی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'قهدريجان‎، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V196_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V196_large.jpg',
  },
  {
    id: '85',
    name: 'رضا پذیرش',
    Age: '23',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V233_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V233_large.jpg',
  },
  {
    id: '86',
    name: 'رضا تاری‌وردی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V200_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V200_large.jpg',
  },
  {
    id: '87',
    name: 'رضا حسنوند',
    Age: '26',
    Date: '۲۶ آبان ۹۸',
    Location: 'اندیشه، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V203_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V203_large.jpg',
  },
  {
    id: '88',
    name: 'رضا ساقی',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V207_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V207_large.jpg',
  },
  {
    id: '89',
    name: 'رضا عباسی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V201_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V201_large.jpg',
  },
  {
    id: '90',
    name: 'رضا علیپور',
    Age: '34',
    Date: '۲۵ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله به شانه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V202_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V202_large.jpg',
  },
  {
    id: '91',
    name: 'رضا معظمی گودرزی',
    Age: '19',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار یا کرج، تهران یا البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V204_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V204_large.jpg',
  },
  {
    id: '92',
    name: 'رضا منصوری',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V198_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V198_large.jpg',
  },
  {
    id: '93',
    name: 'رضا نیسی',
    Age: '۱۶ تا ۱۹',
    Date: '۲۵ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V206_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V206_large.jpg',
  },
  {
    id: '94',
    name: 'روانبخش امامی راد',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'آبادان، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V197_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V197_large.jpg',
  },
  {
    id: '95',
    name: 'زیبا خوشگوار',
    Age: '38',
    Date: '۲۵ آبان ۹۸',
    Location: 'سنندج، کردستان',
    Cause: 'خفگی با گاز اشک آور',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V304_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V304_large.jpg',
  },
  {
    id: '96',
    name: 'ساسان عیدی وندی',
    Age: '17',
    Date: '۲۶ آبان ۹۸',
    Location: 'یزدانشهر، اصفهان',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V214_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V214_large.jpg',
  },
  {
    id: '97',
    name: 'سالم امیر سنجریان',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V213_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V213_large.jpg',
  },
  {
    id: '98',
    name: 'سجاد باقری',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V211_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V211_large.jpg',
  },
  {
    id: '99',
    name: 'سجاد رضایی',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به پشت',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V212_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V212_large.jpg',
  },
  {
    id: '100',
    name: 'سعید رضایی',
    Age: '26',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V209_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V209_large.jpg',
  },
  {
    id: '101',
    name: 'سیامک نویدی',
    Age: '32',
    Date: '۲۶ آبان ۹۸',
    Location: 'تهران (كيانشهر‎)، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V225_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V225_large.jpg',
  },
  {
    id: '102',
    name: 'شبنم دیانی',
    Age: '20',
    Date: '۲۴ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V222_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V222_large.jpg',
  },
  {
    id: '103',
    name: 'شهرام معینی',
    Age: '47',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V224_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V224_large.jpg',
  },
  {
    id: '104',
    name: 'شهنام شکری',
    Age: '40',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V223_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V223_large.jpg',
  },
  {
    id: '105',
    name: 'صادق احمد پناهی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V208_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V208_large.jpg',
  },
  {
    id: '106',
    name: 'صفر عیدی وندی',
    Age: '۲۳ یا ۲۴',
    Date: '۲۶ آبان ۹۸',
    Location: 'یزدانشهر، اصفهان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V210_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V210_large.jpg',
  },
  {
    id: '107',
    name: 'طاهر الخمیس (حطاوی)',
    Age: '25',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V226_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V226_large.jpg',
  },
  {
    id: '108',
    name: 'عباس منصوری (عساکره)',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V002_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V002_large.jpg',
  },
  {
    id: '109',
    name: 'عباسی (نام کوچک نامشخص)',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله به پشت',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V003_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V003_large.jpg',
  },
  {
    id: '110',
    name: 'عبدالرضا شیرزادی',
    Age: '20',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V006_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V006_large.jpg',
  },
  {
    id: '111',
    name: 'عبدالله آجرلو',
    Age: '26',
    Date: '۲۵ آبان ۹۸',
    Location: 'شهرک قدس یا اسلامشهر، تهران',
    Cause: 'اصابت گلوله به لگن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V004_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V004_large.jpg',
  },
  {
    id: '112',
    name: 'عبدالله قویمی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V005_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V005_large.jpg',
  },
  {
    id: '113',
    name: 'عثمان نادری',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'مریوان، کردستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V188_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V188_large.jpg',
  },
  {
    id: '114',
    name: 'عدنان هلالی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V008_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V008_large.jpg',
  },
  {
    id: '115',
    name: 'عرفان فائقی',
    Age: '21',
    Date: '۲۶ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V069_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V069_large.jpg',
  },
  {
    id: '116',
    name: 'عزیز اسکندری',
    Age: '33',
    Date: '۲۵ آبان ۹۸',
    Location: 'مشکین دشت، البرز',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V050_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V050_large.jpg',
  },
  {
    id: '117',
    name: 'علی (یونس) فیروزبخت',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'جوانرود، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V015_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V015_large.jpg',
  },
  {
    id: '118',
    name: 'علی آقایی',
    Age: '21',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'نسیم شهر، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V016_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V016_large.jpg',
  },
  {
    id: '119',
    name: 'علی اکبر ابروتن',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V017_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V017_large.jpg',
  },
  {
    id: '120',
    name: 'علی باوی',
    Age: '25',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V019_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V019_large.jpg',
  },
  {
    id: '121',
    name: 'علی بغلانی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'آبادان، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V018_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V018_large.jpg',
  },
  {
    id: '122',
    name: 'علی تمیمی',
    Age: '27',
    Date: '۲۵ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V026_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V026_large.jpg',
  },
  {
    id: '123',
    name: 'علی حسینی',
    Age: 'نامشخص (احتمالا زیر 18 سال)',
    Date: '۲۵ آبان ۹۸',
    Location: 'مشکین دشت، البرز',
    Cause: 'اصابت گلوله به پهلو',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V216_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V216_large.jpg',
  },
  {
    id: '124',
    name: 'علی خواجه آلبوعلی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V012_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V012_large.jpg',
  },
  {
    id: '125',
    name: 'علی دبیری',
    Age: 'زیر ۱۸ سال',
    Date: '۲۵ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V020_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V020_large.jpg',
  },
  {
    id: '126',
    name: 'علی رحمانی',
    Age: '45',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V024_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V024_large.jpg',
  },
  {
    id: '127',
    name: 'علی سرتیپی',
    Age: '21',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V025_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V025_large.jpg',
  },
  {
    id: '128',
    name: 'علی غزلاوی',
    Age: '12',
    Date: '۲۶ آبان ۹۸',
    Location: 'خرمشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V021_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V021_large.jpg',
  },
  {
    id: '129',
    name: 'علی فتوحی کوهساره',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V215_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V215_large.jpg',
  },
  {
    id: '130',
    name: 'علی محمد آقاپور',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V022_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V022_large.jpg',
  },
  {
    id: '131',
    name: 'علی مرادی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V023_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V023_large.jpg',
  },
  {
    id: '132',
    name: 'علی موسوی',
    Age: '12',
    Date: '۲۵ آبان ۹۸',
    Location: 'رامهرمز، خوزستان',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V217_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V217_large.jpg',
  },
  {
    id: '133',
    name: 'علیرضا استوان',
    Age: '17',
    Date: '۲۵ آبان ۹۸',
    Location: 'رباط کریم، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V031_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V031_large.jpg',
  },
  {
    id: '134',
    name: 'علیرضا انجوی',
    Age: '26',
    Date: '۲۵ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V027_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V027_large.jpg',
  },
  {
    id: '135',
    name: 'علیرضا محمدزاده',
    Age: '29',
    Date: '۲۶ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله به پهلو',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V028_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V028_large.jpg',
  },
  {
    id: '136',
    name: 'علیرضا نوری',
    Age: '17',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V030_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V030_large.jpg',
  },
  {
    id: '137',
    name: 'علیرضا نیکجه',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V029_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V029_large.jpg',
  },
  {
    id: '138',
    name: 'فرامرز پورفرسادی',
    Age: '51',
    Date: '۲۶ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'ضرب و جرح توسط نیروهای امنیتی',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V075_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V075_large.jpg',
  },
  {
    id: '139',
    name: 'فرزاد انصاری فر',
    Age: '27',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهبهان، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V078_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V078_large.jpg',
  },
  {
    id: '140',
    name: 'فرشاد حاجی پور میلاسی',
    Age: '30',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به قلب و سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V077_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V077_large.jpg',
  },
  {
    id: '141',
    name: 'فرهاد مجدم',
    Age: '38',
    Date: '۲۵ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V076_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V076_large.jpg',
  },
  {
    id: '142',
    name: 'قاسم باوی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V079_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V079_large.jpg',
  },
  {
    id: '143',
    name: 'کاوه محمدی',
    Age: '35',
    Date: '۲۵ آبان ۹۸',
    Location: 'جوانرود، کرمانشاه',
    Cause: 'اصابت گلوله به قلب و سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V107_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V107_large.jpg',
  },
  {
    id: '144',
    name: 'کمال فرجی',
    Age: '41',
    Date: '۲۶ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V106_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V106_large.jpg',
  },
  {
    id: '145',
    name: 'کوروش شیدانی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V109_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V109_large.jpg',
  },
  {
    id: '146',
    name: 'کیوان یرفی',
    Age: '42',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V221_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V221_large.jpg',
  },
  {
    id: '147',
    name: 'گلنار صمصامی',
    Age: '34',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V080_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V080_large.jpg',
  },
  {
    id: '148',
    name: 'مبین عبدالهی',
    Age: '27',
    Date: '۲۶ آبان ۹۸',
    Location: 'جوانرود، کرمانشاه',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V141_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V141_large.jpg',
  },
  {
    id: '149',
    name: 'مجاهد الجامعی',
    Age: '۱۵ تا ۱۷',
    Date: '۲۶ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V173_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V173_large.jpg',
  },
  {
    id: '150',
    name: 'مجتبی عبادی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V174_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V174_large.jpg',
  },
  {
    id: '151',
    name: 'مجید شیخی',
    Age: '22',
    Date: '۲۶ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V114_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V114_large.jpg',
  },
  {
    id: '152',
    name: 'مجید فلاحپور',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V112_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V112_large.jpg',
  },
  {
    id: '153',
    name: 'مجید مجدم',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V113_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V113_large.jpg',
  },
  {
    id: '154',
    name: 'مجید هاشمی',
    Age: '34',
    Date: '۲۶ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V115_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V115_large.jpg',
  },
  {
    id: '155',
    name: 'محسن آلبوعلی',
    Age: '۱۷ یا ۲۷',
    Date: '۲۷ آبان ۹۸',
    Location: 'شادگان، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V167_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V167_large.jpg',
  },
  {
    id: '156',
    name: 'محسن ایرانشاهی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله به ران',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V168_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V168_large.jpg',
  },
  {
    id: '157',
    name: 'محسن جعفرپناه',
    Age: '30',
    Date: '۲۶ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V169_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V169_large.jpg',
  },
  {
    id: '158',
    name: 'محسن عبادی مهر',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V178_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V178_large.jpg',
  },
  {
    id: '159',
    name: 'محسن کرمی نیا',
    Age: '34',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V170_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V170_large.jpg',
  },
  {
    id: '160',
    name: 'محسن محمدپور',
    Age: '17',
    Date: '۲۵ آبان ۹۸',
    Location: 'خرمشهر، خوزستان',
    Cause: 'ضرب و جرح توسط نیروهای امنیتی',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V171_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V171_large.jpg',
  },
  {
    id: '161',
    name: 'محمد (نام فامیلی نامشخص)',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V142_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V142_large.jpg',
  },
  {
    id: '162',
    name: 'محمد ابراهیمی',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'قهدريجان‎، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V145_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V145_large.jpg',
  },
  {
    id: '163',
    name: 'محمد پارسا عزیزی مقدم',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V157_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V157_large.jpg',
  },
  {
    id: '164',
    name: 'محمد پالانی',
    Age: '17',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V156_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V156_large.jpg',
  },
  {
    id: '165',
    name: 'محمد پورپیرعلی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'یزدانشهر، اصفهان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V158_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V158_large.jpg',
  },
  {
    id: '166',
    name: 'محمد تیموری',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V164_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V164_large.jpg',
  },
  {
    id: '167',
    name: 'محمد حشمدار',
    Age: '33',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهبهان، خوزستان',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V146_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V146_large.jpg',
  },
  {
    id: '168',
    name: 'محمد حیدریان',
    Age: '19',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V147_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V147_large.jpg',
  },
  {
    id: '169',
    name: 'محمد خالدی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V151_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V151_large.jpg',
  },
  {
    id: '170',
    name: 'محمد خالقی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V152_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V152_large.jpg',
  },
  {
    id: '171',
    name: 'محمد خزایی',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V153_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V153_large.jpg',
  },
  {
    id: '172',
    name: 'محمد داستانخواه',
    Age: '15',
    Date: '۲۵ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V144_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V144_large.jpg',
  },
  {
    id: '173',
    name: 'محمد طاهری',
    Age: '19',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V163_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V163_large.jpg',
  },
  {
    id: '174',
    name: 'محمد عربی',
    Age: '20',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V143_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V143_large.jpg',
  },
  {
    id: '175',
    name: 'محمد معین صالحی',
    Age: '19',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V155_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V155_large.jpg',
  },
  {
    id: '176',
    name: 'محمد ملکی',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V154_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V154_large.jpg',
  },
  {
    id: '177',
    name: 'محمدامین الله قلی',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V001_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V001_large.jpg',
  },
  {
    id: '178',
    name: 'محمدجواد عابدی',
    Age: '16',
    Date: '۲۶ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V150_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V150_large.jpg',
  },
  {
    id: '179',
    name: 'محمدحسین طاهایی',
    Age: '34',
    Date: '۲۷ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V149_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V149_large.jpg',
  },
  {
    id: '180',
    name: 'محمدحسین قنواتی',
    Age: '25',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهبهان، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V148_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V148_large.jpg',
  },
  {
    id: '181',
    name: 'محمدرضا احمدی',
    Age: '17',
    Date: '۲۵ آبان ۹۸',
    Location: 'سنندج، کردستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V159_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V159_large.jpg',
  },
  {
    id: '182',
    name: 'محمدرضا الحسینی',
    Age: '30',
    Date: '۲۷ آبان ۹۸',
    Location: 'تهران، تهران',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V160_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V160_large.jpg',
  },
  {
    id: '183',
    name: 'محمدرضا اینانلو',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V165_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V165_large.jpg',
  },
  {
    id: '184',
    name: 'محمدرضا جمشیدی',
    Age: '20',
    Date: '۲۵ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V166_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V166_large.jpg',
  },
  {
    id: '185',
    name: 'محمدرضا عسافی زرگانی',
    Age: '20',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V205_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V205_large.jpg',
  },
  {
    id: '186',
    name: 'محمدرضا محمدی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V161_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V161_large.jpg',
  },
  {
    id: '187',
    name: 'محمدرضا نیکوروان',
    Age: '22',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V162_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V162_large.jpg',
  },
  {
    id: '188',
    name: 'محمود دشتی نیا',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهبهان، خوزستان',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V110_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V110_large.jpg',
  },
  {
    id: '189',
    name: 'مرتضی صادقی نادر',
    Age: '35',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V175_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V175_large.jpg',
  },
  {
    id: '190',
    name: 'مسعود بهارلو',
    Age: '25',
    Date: '۲۵ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V118_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V118_large.jpg',
  },
  {
    id: '191',
    name: 'مصطفی ابروتن',
    Age: '19',
    Date: '۲۷ آبان ۹۸',
    Location: 'اسلامشهر، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V176_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V176_large.jpg',
  },
  {
    id: '192',
    name: 'مصطفی رودباریان',
    Age: '34',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V179_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V179_large.jpg',
  },
  {
    id: '193',
    name: 'مصطفی فرزامی',
    Age: '27',
    Date: '۲۶ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V177_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V177_large.jpg',
  },
  {
    id: '194',
    name: 'مظفر وطن دوست',
    Age: '45',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V180_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V180_large.jpg',
  },
  {
    id: '195',
    name: 'معین مسلم پور',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'اندیمشک، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V172_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V172_large.jpg',
  },
  {
    id: '196',
    name: 'منصور دریس',
    Age: '۳۰ تا ۳۴',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V117_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V117_large.jpg',
  },
  {
    id: '197',
    name: 'منصور عساکره',
    Age: '41',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V116_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V116_large.jpg',
  },
  {
    id: '198',
    name: 'مهدی احمدی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله به پا',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V121_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V121_large.jpg',
  },
  {
    id: '199',
    name: 'مهدی پاپی',
    Age: '31',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'فردیس، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V119_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V119_large.jpg',
  },
  {
    id: '200',
    name: 'مهدی جهانبازی',
    Age: '35',
    Date: '۲۶ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V123_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V123_large.jpg',
  },
  {
    id: '201',
    name: 'مهدی دائمی',
    Age: '25',
    Date: '۲۵ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V122_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V122_large.jpg',
  },
  {
    id: '202',
    name: 'مهدی رودباریان',
    Age: '21',
    Date: '۲۶ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V126_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V126_large.jpg',
  },
  {
    id: '203',
    name: 'مهدی سبزی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'ملکشهر، اصفهان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V127_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V127_large.jpg',
  },
  {
    id: '204',
    name: 'مهدی عباسی امجد',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V120_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V120_large.jpg',
  },
  {
    id: '205',
    name: 'مهدی کلوخی',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'مشکین دشت، البرز',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V124_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V124_large.jpg',
  },
  {
    id: '206',
    name: 'مهدی نکوئی',
    Age: '23',
    Date: '۲۵ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله به پشت',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V125_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V125_large.jpg',
  },
  {
    id: '207',
    name: 'مهدی ولی پور',
    Age: '16',
    Date: '۲۶ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V128_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V128_large.jpg',
  },
  {
    id: '208',
    name: 'مهران تاک',
    Age: '32',
    Date: '۲۵ آبان ۹۸',
    Location: 'مریوان، کردستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V129_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V129_large.jpg',
  },
  {
    id: '209',
    name: 'مهران زاهدی',
    Age: '19',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به گردن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V130_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V130_large.jpg',
  },
  {
    id: '210',
    name: 'مهرداد حسابی شیجانی',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V132_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V132_large.jpg',
  },
  {
    id: '211',
    name: 'مهرداد دشتی نیا',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهبهان، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V131_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V131_large.jpg',
  },
  {
    id: '212',
    name: 'مهرداد معین فر',
    Age: '32',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به قلب',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V133_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V133_large.jpg',
  },
  {
    id: '213',
    name: 'مهرزاد رضایی',
    Age: '25',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به لگن',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V134_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V134_large.jpg',
  },
  {
    id: '214',
    name: 'مهناز مهدی زاده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به سر، سینه و شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V111_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V111_large.jpg',
  },
  {
    id: '215',
    name: 'میثم احمدی',
    Age: '26',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به شکم',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V135_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V135_large.jpg',
  },
  {
    id: '216',
    name: 'میثم مجدم',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'اهواز، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V137_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V137_large.jpg',
  },
  {
    id: '217',
    name: 'میثم منیعات',
    Age: '25',
    Date: '۲۴ آبان ۹۸',
    Location: 'خرمشهر، خوزستان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V136_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V136_large.jpg',
  },
  {
    id: '218',
    name: 'میلاد حمیدی',
    Age: '19',
    Date: '۲۵ آبان ۹۸',
    Location: 'خرمشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V138_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V138_large.jpg',
  },
  {
    id: '219',
    name: 'میلاد محققی￼￼',
    Age: '24',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V139_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V139_large.jpg',
  },
  {
    id: '220',
    name: 'مینا شیخی',
    Age: '58',
    Date: '۲۵ آبان ۹۸',
    Location: 'تهران، تهران',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V140_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V140_large.jpg',
  },
  {
    id: '221',
    name: 'نادر بیژنوند',
    Age: '22',
    Date: '۲۵ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V181_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V181_large.jpg',
  },
  {
    id: '222',
    name: 'نادر مومنی',
    Age: '55',
    Date: '۲۶ آبان ۹۸',
    Location: 'شهریار، تهران',
    Cause: 'اصابت گلوله به بالا تنه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V182_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V182_large.jpg',
  },
  {
    id: '223',
    name: 'نادر نصیرپور',
    Age: '66',
    Date: '۲۶ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V183_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V183_large.jpg',
  },
  {
    id: '224',
    name: 'ناصر رضایی',
    Age: '36',
    Date: '۲۶ آبان ۹۸',
    Location: 'کرج، البرز',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V184_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V184_large.jpg',
  },
  {
    id: '225',
    name: 'نوید بهبودی',
    Age: '23',
    Date: '۲۶ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V185_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V185_large.jpg',
  },
  {
    id: '226',
    name: 'هادی قربانی',
    Age: '20',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'نسیم شهر، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V081_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V081_large.jpg',
  },
  {
    id: '227',
    name: 'هادی محمدی￼￼',
    Age: '24',
    Date: '۲۵ آبان ۹۸',
    Location: '(شهر نامشخص)، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V082_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V082_large.jpg',
  },
  {
    id: '228',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V303_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V303_large.jpg',
  },
  {
    id: '229',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V292_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V292_large.jpg',
  },
  {
    id: '230',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V256_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V256_large.jpg',
  },
  {
    id: '231',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V257_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V257_large.jpg',
  },
  {
    id: '232',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V258_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V258_large.jpg',
  },
  {
    id: '233',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V259_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V259_large.jpg',
  },
  {
    id: '234',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V260_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V260_large.jpg',
  },
  {
    id: '235',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V261_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V261_large.jpg',
  },
  {
    id: '236',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V262_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V262_large.jpg',
  },
  {
    id: '237',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V263_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V263_large.jpg',
  },
  {
    id: '238',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V264_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V264_large.jpg',
  },
  {
    id: '239',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V265_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V265_large.jpg',
  },
  {
    id: '240',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V266_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V266_large.jpg',
  },
  {
    id: '241',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V267_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V267_large.jpg',
  },
  {
    id: '242',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V268_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V268_large.jpg',
  },
  {
    id: '243',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V269_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V269_large.jpg',
  },
  {
    id: '244',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V270_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V270_large.jpg',
  },
  {
    id: '245',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V271_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V271_large.jpg',
  },
  {
    id: '246',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V272_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V272_large.jpg',
  },
  {
    id: '247',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V273_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V273_large.jpg',
  },
  {
    id: '248',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V274_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V274_large.jpg',
  },
  {
    id: '249',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V275_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V275_large.jpg',
  },
  {
    id: '250',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V276_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V276_large.jpg',
  },
  {
    id: '251',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V277_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V277_large.jpg',
  },
  {
    id: '252',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V278_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V278_large.jpg',
  },
  {
    id: '253',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V279_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V279_large.jpg',
  },
  {
    id: '254',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V280_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V280_large.jpg',
  },
  {
    id: '255',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V281_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V281_large.jpg',
  },
  {
    id: '256',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V282_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V282_large.jpg',
  },
  {
    id: '257',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V283_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V283_large.jpg',
  },
  {
    id: '258',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V284_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V284_large.jpg',
  },
  {
    id: '259',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V285_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V285_large.jpg',
  },
  {
    id: '260',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V286_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V286_large.jpg',
  },
  {
    id: '261',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V287_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V287_large.jpg',
  },
  {
    id: '262',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V288_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V288_large.jpg',
  },
  {
    id: '263',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شهریار یا ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V289_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V289_large.jpg',
  },
  {
    id: '264',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V235_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V235_large.jpg',
  },
  {
    id: '265',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V236_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V236_large.jpg',
  },
  {
    id: '266',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V237_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V237_large.jpg',
  },
  {
    id: '267',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V238_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V238_large.jpg',
  },
  {
    id: '268',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V239_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V239_large.jpg',
  },
  {
    id: '269',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V240_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V240_large.jpg',
  },
  {
    id: '270',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V241_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V241_large.jpg',
  },
  {
    id: '271',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V242_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V242_large.jpg',
  },
  {
    id: '272',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V243_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V243_large.jpg',
  },
  {
    id: '273',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V244_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V244_large.jpg',
  },
  {
    id: '274',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V245_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V245_large.jpg',
  },
  {
    id: '275',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V246_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V246_large.jpg',
  },
  {
    id: '276',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V227_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V227_large.jpg',
  },
  {
    id: '277',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V228_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V228_large.jpg',
  },
  {
    id: '278',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'بهارستان، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V229_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V229_large.jpg',
  },
  {
    id: '279',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V230_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V230_large.jpg',
  },
  {
    id: '280',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'چهاردانگه، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V231_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V231_large.jpg',
  },
  {
    id: '281',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: 'فردیس، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V232_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V232_large.jpg',
  },
  {
    id: '282',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۵ آبان ۹۸',
    Location: 'جوانرود، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V234_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V234_large.jpg',
  },
  {
    id: '283',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V247_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V247_large.jpg',
  },
  {
    id: '284',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'ملکشهر، اصفهان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V248_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V248_large.jpg',
  },
  {
    id: '285',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'رباط کریم، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V249_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V249_large.jpg',
  },
  {
    id: '286',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'رباط کریم، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V250_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V250_large.jpg',
  },
  {
    id: '287',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'رباط کریم، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V251_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V251_large.jpg',
  },
  {
    id: '288',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V252_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V252_large.jpg',
  },
  {
    id: '289',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V255_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V255_large.jpg',
  },
  {
    id: '290',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V253_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V253_large.jpg',
  },
  {
    id: '291',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'صدرا، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V254_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V254_large.jpg',
  },
  {
    id: '292',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ آبان ۹۸',
    Location: 'سیرجان، کرمان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V291_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V291_large.jpg',
  },
  {
    id: '293',
    name: 'هویت شناسایی نشده',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V290_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V290_large.jpg',
  },
  {
    id: '294',
    name: 'هویت شناسایی نشده (احتمالا بهروز فلاح)',
    Age: 'نامشخص',
    Date: '۲۶ آبان ۹۸',
    Location: 'بومهن، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V054_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V054_large.jpg',
  },
  {
    id: '295',
    name: 'وحید توسلی دوست',
    Age: '48',
    Date: '۲۶ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'اصابت گلوله به سینه',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V294_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V294_large.jpg',
  },
  {
    id: '296',
    name: 'وحید دامور',
    Age: '30',
    Date: '۲۶ آبان ۹۸',
    Location: 'ملارد، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V293_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V293_large.jpg',
  },
  {
    id: '297',
    name: 'یاسین (مجتبی) رمضان نژاد',
    Age: '34',
    Date: '۲۶ آبان ۹۸',
    Location: 'قدس، تهران',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V298_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V298_large.jpg',
  },
  {
    id: '298',
    name: 'یدالله حاجی طاری پور',
    Age: '۶۳ یا ۶۴',
    Date: '۲۵ آبان ۹۸',
    Location: 'شیراز، فارس',
    Cause: 'خفگی با گاز اشک آور',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V295_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V295_large.jpg',
  },
  {
    id: '299',
    name: 'یعقوب خسروی',
    Age: 'نامشخص',
    Date: '۲۵ یا ۲۶ آبان ۹۸',
    Location: '(شهر نامشخص)، اصفهان',
    Cause: 'اصابت گلوله به سر',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V296_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V296_large.jpg',
  },
  {
    id: '300',
    name: 'یعقوب نجفی بابادی',
    Age: '26',
    Date: '۲۶ آبان ۹۸',
    Location: 'اصفهان، اصفهان',
    Cause: 'اصابت گلوله به پهلو',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V297_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V297_large.jpg',
  },
  {
    id: '301',
    name: 'یوسف آلبو عبادی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V300_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V300_large.jpg',
  },
  {
    id: '302',
    name: 'یوسف خالدی',
    Age: 'نامشخص',
    Date: '۲۷ آبان ۹۸',
    Location: 'ماهشهر، خوزستان',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V302_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V302_large.jpg',
  },
  {
    id: '303',
    name: 'یوسف دری',
    Age: '35',
    Date: '۲۶ آبان ۹۸',
    Location: 'بومهن، تهران',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V301_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V301_large.jpg',
  },
  {
    id: '304',
    name: 'یونس جلیلی',
    Age: 'نامشخص',
    Date: '۲۴ تا ۲۷ آبان ۹۸',
    Location: 'کرمانشاه، کرمانشاه',
    Cause: 'اصابت گلوله',
    ImageT:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V299_48px.jpg',
    ImageL:
      'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V299_large.jpg',
  },
];

export default list;
