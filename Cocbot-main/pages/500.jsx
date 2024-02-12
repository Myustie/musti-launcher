import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Üzgünüz Sunucu Hatası Lütfen Daha Sonra Tekrar Deneyin!"} />
}

export default UnkownPage;