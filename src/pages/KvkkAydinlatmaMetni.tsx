import LegalPage from "@/components/LegalPage";

const KvkkAydinlatmaMetni = () => (
  <LegalPage
    title="KVKK Aydınlatma Metni"
    description="Bu metin, Polat İskele iletişim formu aracılığıyla paylaşılan kişisel verilerin hangi amaçlarla işlendiğini açıklamak için hazırlanmıştır."
    sections={[
      {
        title: "Veri Sorumlusu",
        content: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu Polat İskele'dir.",
      },
      {
        title: "İşlenen Kişisel Veriler",
        content:
          "İletişim ve teklif talebi sürecinde ad soyad, telefon, e-posta, firma adı ve mesaj içeriği bilgileri işlenebilir.",
      },
      {
        title: "İşleme Amacı",
        content:
          "Kişisel verileriniz teklif taleplerinize dönüş yapmak, sizinle iletişim kurmak ve hizmet talebinizi değerlendirmek amacıyla işlenir.",
      },
      {
        title: "Saklama Süresi",
        content:
          "Paylaştığınız bilgiler yalnızca iletişim ve teklif süreci için gerekli süre boyunca saklanır; amacın ortadan kalkması halinde ilgili mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.",
      },
      {
        title: "Aktarım",
        content:
          "Kişisel verileriniz, yasal zorunluluklar ve hizmetin gerektirdiği zorunlu haller dışında üçüncü kişilerle paylaşılmaz.",
      },
      {
        title: "KVKK Madde 11 Kapsamındaki Haklarınız",
        content:
          "KVKK madde 11 uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını öğrenme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme ve kanunda sayılan diğer haklara sahipsiniz.",
      },
      {
        title: "İletişim",
        content:
          "KVKK kapsamındaki başvurularınız ve sorularınız için polatiskele@gmail.com adresi üzerinden Polat İskele ile iletişime geçebilirsiniz.",
      },
    ]}
  />
);

export default KvkkAydinlatmaMetni;
