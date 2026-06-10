import LegalPage from "@/components/LegalPage";

const GizlilikVeCerezPolitikasi = () => (
  <LegalPage
    title="Gizlilik ve Çerez Politikası"
    description="Bu politika, Polat İskele web sitesinin ziyaretçilerle ilgili gizlilik ve çerez yaklaşımını açıklar."
    sections={[
      {
        title: "Sitenin Kullanım Amacı",
        content:
          "Polat İskele web sitesi temel olarak kurumsal tanıtım ve iletişim amacıyla kullanılmaktadır. Sitede online satış, üyelik, ödeme veya kullanıcı hesabı bulunmamaktadır.",
      },
      {
        title: "Form Verilerinin Kullanımı",
        content:
          "İletişim formu aracılığıyla paylaşılan ad soyad, telefon, e-posta, firma adı ve mesaj bilgileri yalnızca iletişim kurmak ve teklif talebinize dönüş yapmak amacıyla kullanılır.",
      },
      {
        title: "Çerez Kullanımı",
        content:
          "Site, çalışması için gerekli zorunlu teknik çerezler dışında çerez kullanmamaktadır. Zorunlu teknik çerezler, sitenin güvenli ve düzgün şekilde çalışmasını sağlamak için kullanılabilir.",
      },
      {
        title: "Takip ve Analitik Araçları",
        content:
          "Projede Google Analytics, Meta Pixel veya benzeri bir takip kodu tespit edilmemiştir. Bu tür bir araç eklenirse, politika ilgili aracın kullanımını açıkça belirtecek şekilde güncellenmelidir.",
      },
      {
        title: "Üçüncü Kişilerle Paylaşım",
        content:
          "Form üzerinden iletilen bilgiler, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz ve pazarlama amacıyla kullanılmaz.",
      },
    ]}
  />
);

export default GizlilikVeCerezPolitikasi;
