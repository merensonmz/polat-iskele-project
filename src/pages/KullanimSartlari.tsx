import LegalPage from "@/components/LegalPage";

const KullanimSartlari = () => (
  <LegalPage
    title="Kullanım Şartları"
    description="Bu şartlar, Polat İskele web sitesini ziyaret eden kullanıcılar için geçerlidir."
    sections={[
      {
        title: "Bilgilendirme Amacı",
        content:
          "Bu web sitesinde yer alan içerikler Polat İskele hizmetleri hakkında genel bilgilendirme amacıyla sunulmaktadır.",
      },
      {
        title: "İçeriklerde Değişiklik",
        content:
          "Sitedeki görseller, hizmet açıklamaları, teknik bilgiler ve diğer içerikler zaman içinde önceden bildirim yapılmaksızın değişebilir.",
      },
      {
        title: "Fikri Haklar",
        content:
          "Sitede yer alan içeriklerin, metinlerin ve görsellerin izinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır.",
      },
      {
        title: "Şartların Kabulü",
        content:
          "Web sitesini kullanmanız, bu kullanım şartlarını kabul ettiğiniz anlamına gelir. Şartları kabul etmiyorsanız siteyi kullanmayı sonlandırabilirsiniz.",
      },
    ]}
  />
);

export default KullanimSartlari;
