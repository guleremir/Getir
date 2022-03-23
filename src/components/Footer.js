import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { FiGlobe} from "react-icons/fi"

export default function Footer() {
  return (
    <div className="bg-white py-4 sm:pt-10 sm:pb-6">
			<div className="container mx-auto grid gap-y-5">
				<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-y-4">
					<nav>
						<h3 className="text-lg text-purple-700 mb-4">
							Getir'i indirin!
						</h3>
						<ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3">
							<li>
								<a href="#">
									<img
										src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
										alt=""/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
										alt=""/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
										alt=""/>
								</a>
                
							</li>
						</ul>
					</nav>
					<nav>
						<h3 className="text-lg text-purple-700 mb-4">
							Getir'i keşfedin
						</h3>
						<ul className="grid gap-y-3 text-sm text-gray-600">
							<li>
								<a href="#" className="text-base" >Hakkımızda</a>
							</li>
							<li>
								<a href="#" className="text-base">Kariyer</a>
							</li>
							<li>
								<a href="#" className="text-base">İletişim</a>
							</li>
							<li>
								<a href="#" className="text-base">COVID-19 Duyuru</a>
							</li>
							<li>
								<a href="#" className="text-base">Sosyal Sorumluluk Projeleri</a>
							</li>
						</ul>
					</nav>
					<nav>
						<h3 className="text-lg text-purple-700 mb-4">
							Yardıma mı ihtiyacınız var?
						</h3>
						<ul className="grid gap-y-3 text-sm text-gray-600">
							<li>
								<a href="#" className="text-base">Sıkça Sorulan Sorular</a>
							</li>
							<li>
								<a href="#" className="text-base">Kişisel Verilerin Korunması</a>
							</li>
							<li>
								<a href="#" className="text-base">Gizlilik Politikası</a>
							</li>
							<li>
								<a href="#" className="text-base">Kullanım Koşulları</a>
							</li>
							<li>
								<a href="#" className="text-base">Çerez Politikası</a>
							</li>
						</ul>
					</nav>
					<nav>
						<h3 className="text-lg text-purple-700 mb-4">
							İş Ortağımız Olun
						</h3>
						<ul className="grid gap-y-3 text-sm text-gray-600">
							<li>
								<a href="#" className="text-base">Bayimiz Olun</a>
							</li>
							<li>
								<a href="#" className="text-base">Deponuzu Kiralayın</a>
							</li>
							<li>
								<a href="#" className="text-base">GetirYemek Restoranı Olun</a>
							</li>
							<li>
								<a href="#" className="text-base">GetirÇarşı İşletmesi Olun</a>
							</li>
						</ul>
					</nav>
          <nav>
            <div>
              <a href="#" className="border-box">
                  <img src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png" alt=""/>
              </a>
            </div>
          </nav>
          
				</div>
				<div className="h-[1px] bg-gray-100"></div>
				<div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
					<div className="flex gap-x-4 text-gray-700">
						&copy; 2022 Getir
							<a href="#" className="text-purple-800 hover:underline"> Bilgi Toplumu Hizmetleri</a>
						<div>
						</div>
					</div>
					<nav className="flex gap-x-2 items-center">
						<a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-purple-50 hover:text-purple-700">
							<FaFacebook size={20} />
						</a>
						<a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-purple-50 hover:text-purple-700">
							<FaTwitter size={20} />
						</a>
						<a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-purple-50 hover:text-purple-700">
							<FaInstagram size={20} />
						</a>
						<a href="#" className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700">
							<FiGlobe size={18} />
							Türkçe (TR)
						</a>
					</nav>
				</div>
			</div>
		</div>
  )
}
