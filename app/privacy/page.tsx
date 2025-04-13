import Header from '../components/Header'
import AnimatedTitle from '../components/AnimatedTitle';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="opacity-0 animate-fade-in duration-500">
      <Header />

      <section className="text-[#00B4C8] px-15 pt-15 pb-30 space-y-4">
        <div className="pb-15">
          <img src="logo.svg" alt="ロゴ" />
        </div>

        <AnimatedTitle text={`PRIVACY POLICY`} />

        <section className="mx-auto max-w-[900px] px-8 py-16 leading-relaxed">

          <p className="text-[16px] mb-12 text-right">
            メノー株式会社　
          </p>

          {/* 1段落目 */}
          <p className="text-[16px] mb-6">
            メノー株式会社（以下、「当社」といいます。）は、Menō.ltd及びそのサブドメインのウェブサイト
            （以下、「当該サイト」という）で運営・提供するサービスにおける個人情報保護の重要性について認識し、
            個人情報の保護に関する法律を遵守すると共に、以下のプライバシーポリシー（以下、「本ポリシー」という）を定めます。
          </p>

          {/* 第１条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第１条（個人情報の定義）
          </h2>
          <p className="text-[16px] mb-6">
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、
            次のいずれかに該当するものをいう。
          </p>
          <ol className="list-decimal list-inside text-[16px] mb-6 ml-5 space-y-2">
            <li>
              当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容
              貌、指紋、声紋にかかるデータ
            </li>
            <li>
              健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別符号）
            </li>
          </ol>

          {/* 第２条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第２条（個人情報の取得方法）
          </h2>
          <ol className="list-decimal list-inside text-[16px] mb-6 ml-5 space-y-2">
            <li>
              当該サイトでは、インターネットドメイン名、IPアドレス、サイト内検索のクエリ情報、
              その他当該サイト閲覧に係る情報を自動的に取得します。なお、クッキー
              （サーバ側で利用者を識別するために、サーバから利用者のブラウザに送信され、利用者のコンピュータに蓄積させる情報）は、
              ユーザビリティーの向上を目的とする内容に限定するものであり、個人情報は一切含みません。
            </li>
            <li>
              「お問合せ（contact）」等のコンテンツをご利用される場合は、タイトル、お名前、メールアドレスのご記入をお願いしています。
              また、住所、電話番号等について、任意に登録をお願いしています。
            </li>
          </ol>

          {/* 第３条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第３条（個人情報の利用目的）
          </h2>
          <ol className="list-decimal list-inside text-[16px] mb-6 ml-5 space-y-2">
            <li>
              第2条第１項で収集した情報は、当該サイトが提供するサービスを円滑に実施するための参考として利用します。
            </li>
            <li>
              第２条２項で収集した情報の利用目的は、下記の通りとします。
            <ol className="list-decimal list-inside ml-5 space-y-2">
              <li>お問い合わせに対する回答・ご相談の予約</li>
              <li>ご相談をお受けするにあたっての利益相反等の確認</li>
              <li>各種資料やご案内の送付</li>
              <li>当該サイト及び業務の改善等</li>
              <li>当該サイトの保守・管理業者への個人情報を特定しない方法による問い合わせ状況の報告</li>
              <li>個人情報を特定しない統計的な情報として集約し公表すること。</li>
              <li>電子メールの配信</li>
            </ol>
            </li>
          </ol>

          {/* 第４条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第４条（個人情報の第三者への開示）
          </h2>
          <p className="text-[16px] mb-6">
            当社では、収集した情報を第３条の利用目的以外の目的のために自ら利用し、又は第三者に提供いたしません。ただし、次の場合には、
            ご本人の事前の同意なく、取得した情報を開示できるものとします。
          </p>
          <ol className="list-decimal list-inside text-[16px] mb-6 ml-5 space-y-2">
            <li>法令に基づき開示を求められた場合</li>
            <li>当社、他のご本人またはその他の第三者の権利、利益、名誉、信用等を保護するために必要であると当社が判断した場合</li>
            <li>ご本人が自分の個人情報の開示を事前に承諾した場合</li>
          </ol>

          {/* 第５条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第５条（個人情報の利用・提供の拒否に関するお問い合わせ）
          </h2>
          <p className="text-[16px] mb-6">
            一旦当社にご提供いただいた個人情報について、利用を望まない場合や利用目的内での第三者への提供を望まない場合は、
            当社までお問い合わせください。
          </p>

          {/* 第６条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第６条（個人情報の変更及び通知について）
          </h2>
          <p className="text-[16px] mb-6">
            当社は、このプライバシーポリシーの内容を、事前の予告なく変更することがあります。
            ご本人へその都度ご連絡はいたしかねますので、ご利用の際には本ページの最新情報をご参照ください。
          </p>

          {/* 第７条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第７条（個人情報の訂正及び削除）
          </h2>
          <ol className="list-decimal list-inside text-[16px] mb-6 ml-5 space-y-2">
            <li>
              当社が保有する個人情報が真実ではないときは、ご本人の請求により、個人情報の訂正及び削除を求めることができます。
              請求は、当該ページの「お問合せ（contact）」等又は第11条の連絡先からご連絡ください。
            </li>
            <li>
              当社は、ご本人から前項の請求を受けた場合に、当該個人情報の訂正又は削除の決定をしたときは、当社が定める手続きに従い
              当該個人情報の訂正又は削除を行った後、遅滞なくご本人に通知します。
            </li>
          </ol>

          {/* 第８条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第８条（免責事項）
          </h2>
          <ol className="list-decimal list-inside text-[16px] mb-6 ml-5 space-y-2">
            <li>
              当該サイトで公開されている全ての内容は、予告なしに変更または中止される可能性があります。
              また、当該サイトで公開されている全ての内容について、できる限り正確な情報を提供するように努めておりますが、
              必ずしも正確性や安全性を保証するものではありません。
              当社は、これらの内容およびその変更に伴い生じる損害等について、一切の責任を負いません。
            </li>
            <li>
              当社は、当該サイトの利用及び当該サイトのリンクやバナー等により移動した先のサイトで提供される情報、
              サービス等によって生じる損害等について、一切の責任を負いません。
            </li>
          </ol>

          {/* 第９条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第９条（著作権）
          </h2>
          <p className="text-[16px] mb-6">
            当該サイトで掲載されている文章や画像等の無断転載を禁じます。
          </p>

          {/* 第10条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第10条（適用範囲）
          </h2>
          <p className="text-[16px] mb-6">
            本プライバシーポリシーは、当該サイトにのみ適用されます。なお、当該サイトのうち他のソーシャルメディア（SNS）のボ
            タン等が設置されているページを閲覧した際、当該SNSに閲覧者に関する情報が送信されることがあります。当該サイトで利
            用している他のSNS等のサービスのプライバシーポリシー等は、各事業者のサイト等でご確認ください。
          </p>

          {/* 第11条 */}
          <h2 className="text-[20px] font-bold mt-10 mb-4">
            第11条（苦情及び相談の連絡先）
          </h2>
          <p className="text-[16px] mb-6">
            当社は、個人情報の取扱いについて、ご本人からの当社の個人情報の取扱いについて、
            ご本人からの苦情や相談を受け付けます。相談や苦情等は、以下までお問い合わせください。<br />
          <br />
            メノー株式会社<br />
            メールアドレス: contact@meno.ltd
          </p>

          <p className="text-[16px] mt-16 text-right">
            2025年（令和7年）00月00日　策定
          </p>
        </section>

      </section>

      <Contact />
      <Footer />
    </main>
  );
}


