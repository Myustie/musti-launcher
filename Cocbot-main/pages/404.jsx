import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Üzgünüz Aradığınız Sayfa Bulunamadı!',
        'Merhaba! Galiba Yanlış Sayfa Aradın!',
        'Gitmek İstediğin Sayfa Bulunamadı Daha Sonra Tekrar Dene!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa Bulunamadı."} />
}

export default UnkownPage;

