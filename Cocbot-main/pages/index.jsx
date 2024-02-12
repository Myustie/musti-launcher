import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="470" src="/img/SterkPp.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
        </p>
        <p className="animateHeader text-white text-opacity-60 text-center mt-0">
       Moderasyon, Koruma, Bilet, Oto Sistemler, Bir çok Gelişmiş Sistem Ve Daha Fazlası... 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/api/oauth2/authorize?client_id=1093519769128407040&permissions=8&scope=bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Sunucuna Ekle
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://discord.gg/JRcmWyCXm9"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
  Destek Sunucusu </a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/Dc1.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/Dc2.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"CocBOT" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Gelişmiş Ekonomi Sistemleriyle Sizi Eğlendiren CocBOT'u Şimdi Deneyin!" }}/>
            <a href="https://discord.com/api/oauth2/authorize?client_id=1093519769128407040&permissions=8&scope=bot" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" /> SterkBOT'u Sunucuna Ekle!
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Bot Hakkında </p>
                  <p className="text-gray-500 line-clamp-4"> 2023 Yılında Yapımına Başlayan, 2023 Yılında Betası Sunulan CocBOT 2024 Yılında Sizlere 45+ Komut İle Hizmet Vermektedir.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Erişebilirlik </p>
                  <p className="text-gray-500 line-clamp-4"> CocBOT'un Tüm Komutlarına Slash (C) İle Çok Kolay Erişebilir Ve Kullanmaya Başlayabilirsiniz. Şimdi Denemek İstersen Sunucuna Ekle!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenlik </p>
                  <p className="text-gray-500 line-clamp-4"> CocBOT Sadece; Kullanıcı ID'niz, Sunucu ID'niz Ve Profil Fotoğrafınıza Erişebilir. Zaten Bu Bilgilerde Şifreli Bir Şekilde VDS'imizde Saklanmaktadır. </p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Yardım & Soru </p>
                  <p className="text-gray-500 line-clamp-4"> CocBOT İle İlgili Bir Yardıma İhtiyacınız Olduğunda Sormaktan Çekinmeyin. Sorularınızı İse Discord Sunucumuza Gelerek Sorabilirsiniz.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src=" TEL İÇİN RESİM "  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold"> Sunucunuzun En İyi Botu! </p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5"> CocBOT'u Sende Sunucuna Ekle Ve Tadını Çıkar.  </p>
                </div>
                <img src=" PC İÇİN RESİM " className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
