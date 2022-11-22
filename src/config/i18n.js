import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          hometitle: {
            text: 'bloody november',
          },
          infotext: {
            text: `
            A series of nationwide civil protests in Iran, sometimes known as Bloody November or Bloody Aban took place in November 2019. Initially caused by a 200% increase in fuel prices, they occurred as part of the wider Iranian Democracy Movement, leading to calls for the overthrow of the government in Iran and Supreme Leader Ali Khamenei. The protests commenced as peaceful gatherings on the evening of 15 November but spread to 29 provinces and hundreds of cities within hours. As videos of the protest circulated online, eventually became the most violent and severe anti-government unrest since the rise of Iran's Islamic Republic in 1979.
            
            To block the sharing of information regarding the protests and the deaths of hundreds of protesters on social media platforms, the government shut down the Internet nationwide, resulting in a near-total internet blackout of around six days. In an effort to crush the protests, the Iranian government (according to Amnesty International) shot protesters dead from rooftops, helicopters, and at close range with machine gun fire. In an effort to mask the scale and casualty count of the protests, it hauled away large numbers of bodies of the dead protesters, and threatened families of slain protesters not to speak to the media or hold funerals.
            
            As many as 1,500 Iranian protesters were killed. The government crackdown and protests resulted in the destruction of 731 government banks including Iran's central bank, nine Islamic religious centers, protesters tearing down anti-American billboards, and posters and statues of the Supreme Leader Ali Khamenei as well as former leader Ruhollah Khomeini. Protesters also attacked fifty government military bases. The Iranian regime also employed a week-long nationwide internet shutdown becoming the longest total Internet shutdown in a large country. It was also the first blackout that effectively isolated a whole nation.
            
            The uprising, as well as the wider Iranian Democracy Movement in general, differed from earlier protests in 2009 in not being limited to students and large cities, and in the speed, severity, and higher death toll of the government crackdown, which crushed the uprising in three days. However, protests flared up periodically in the months after.
            `,
          },
          infobutton: {
            text: 'Watch More',
          },
        },
      },
      fa: {
        translation: {
          hometitle: {
            text: 'آبان خونین',
          },
          infotext: {
            text: `اعتراضات آبان ۱۳۹۸ ایران یا آبان خونین مجموعهٔ اعتراضات مردمی و ضد حکومتی در سراسر ایران بود که در ۲۴ آبان ۱۳۹۸ و پس از انجام مجدد سهمیه‌بندی بنزین در ایران و افزایش ۲۰۰ درصدی قیمت بنزین آغاز شد. این اعتراضات که عمدتاً در محلات کارگری و فقیرنشین شهری متمرکز و در ابتدا مسالمت‌آمیز بود، در واکنش به افزایش قیمت بنزین آغاز شد ولی سپس نظام جمهوری اسلامی ایران و رهبران روحانی آن را هدف گرفت. بر اساس گزارش نهادهای امنیتی ایران، ۲۹ استان و صدها شهر دستخوش ناآرامی‌های پس از افزایش قیمت بنزین بودند. این اعتراضات به خشن ترین و شدیدترین ناآرامی های ضد دولتی از زمان ظهور جمهوری اسلامی ایران در سال 1979 تبدیل شد.

            در روز اول اعتراضات اینترنت تلفن همراه در شهرهای مشهد، اهواز، بهبهان و امیدیه مختل شد و از ۲۵ آبان به دستور شورای عالی امنیت ملی قطعی سراسری اینترنت آغاز شد. با گسترش تجمعات اعتراضی در ۲۵ آبان، محمدجعفر منتظری، دادستان وقت کل ایران، معترضان به افزایش قیمت بنزین را «اخلال‌گر» خواند و تهدید کرد که با آنان برخورد جدی خواهد شد. همزمان با آن نهادهای امنیتی ایران با ارسال پیامک‌های تهدیدآمیز به تلفن‌های همراه بعضی شهروندان شرکت کرده در تجمعات، آن‌ها را تهدید به پیگرد قانونی در صورت تکرار شرکت در تجمعات غیرقانونی کردند. در تلاش برای سرکوب اعتراضات، دولت ایران (به گفته عفو بین الملل) معترضان را از پشت بام ها، هلیکوپترها و از فاصله نزدیک با شلیک مسلسل به قتل رساند. در تلاش برای پنهان کردن ابعاد و تعداد تلفات تظاهرات، تعداد زیادی از اجساد معترضان کشته شده را با خود برد و خانواده‌های معترضان کشته شده را تهدید کرد که با رسانه‌ها صحبت نکنند و مراسم خاکسپاری برگزار نکنند.
            دو روز پس از سه برابر شدن قیمت بنزین، علی خامنه‌ای، رهبر جمهوری اسلامی، از تصمیم سران قوا مبنی بر افزایش قیمت بنزین حمایت کرد. او آتش‌زدن بانک‌ها و ایجاد ناآرامی را به «اشرار و ضدانقلاب و دشمنان ایران» نسبت داد و با اشاره به جان باختن تعدادی از معترضان، اجرای طرح افزایش قیمت سوخت را ضروری دانست. خامنه‌ای در این سخنرانی پنج بار بر سررشته نداشتن یا تخصص نداشتنش در مورد مسائل اقتصادی تأکید کرد. سخنان خامنه‌ای در ۲۶ آبان از سوی مخالفانش به فرمان «سرکوب اعتراضات» تعبیر شد، اما افراد نزدیک به حکومت صحبت‌های او را «فداکارانه» و «باعث پایان آشوب‌ها» ارزیابی کردند. رویترز در گزارش ویژهٔ خود در ۲ دی ۱۳۹۸ نوشت که خامنه‌ای در جلسه‌ای با حضور مقامات امنیتی و دولتی، از آن‌ها خواسته تا به هر قیمتی که شده اعتراضات مردم را متوقف کنند.
            
            خبرگزاری‌ها و سازمان‌های حقوق بشری خارج از کشور، بر اساس تحقیقات و منابع خود، تعداد جان‌باختگان اعتراضات را از چند صد نفر تا ۱۵۰۰ نفر اعلام کرده‌اند؛ این در حالی است که مقامات رسمی جمهوری اسلامی ایران از اعلام رقم دقیق کشته‌شدگان سر باز می‌زنند. از سوی دیگر، برخی پژوهش‌ها نشان می‌دهد بیش از ۷٬۵۰۰ مرگ بدون دلیل در پاییز ۱۳۹۸ و ۶٬۳۰۰ مرگ بدون دلیل در آبان ۱۳۹۸ ثبت شده‌است که علت این مرگ‌ومیر کووید-۱۹، آنفولانزای فصلی، تصادفات جاده‌ایی و حوادث طبیعی نبوده‌است. آمار دقیقی نیز از بازداشت‌شدگان در دسترس نیست، اما جمع‌بندی سخنان مقامات رسمی جمهوری اسلامی و همچنین گزارش نهادهای حقوق بشری نشان می‌دهد که در جریان اعتراضات دست کم ۸٬۶۰۰ نفر در ۲۲ استان ایران بازداشت شدند.
            
            `,
          },
          infobutton: {
            text: 'اطلاعات بیشتر',
          },
        },
      },
    },
    lng: 'fa', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
