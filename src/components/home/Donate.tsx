import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const Donate = () => (
    <section className="bg-blue-darker">
        <div className="relative">
            <img className="object-cover absolute w-full h-full opacity-20" src="/img/2023-06-03-20-54-59-bw-shuto_revival_project_beta-ddm_honda_civic_fd2.png" alt="" />

            <Container className="flex relative top-0 flex-col items-center py-12 max-w-7xl lg:items-start">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-teal">支持我们</h1>
                    <p className="pt-4 pb-6">
                        资金贡献将用于服务器的扩展和维护开支。
                        <br />
                        超出部分将用于购买项目所需的素材（如 3D 模型），
                        以及协助开发团队维修、维护或升级硬件，以提升工作效率和稳定性。
                    </p>
                </div>
                <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-2 mb-3">
                            <FontAwesomeIcon icon={faPatreon} className="text-3xl text-[#FF424D]" />
                            <span className="text-2xl font-bold text-teal">Patreon</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">面向海外用户</p>
                        <a href="https://www.patreon.com/Shutoko_Revival_Project" target="_blank" rel="noreferrer">
                            <Button className="w-40 hover:text-[#FF424D] bg-[#FF424D] hover:bg-white border-2 border-[#FF424D]">
                                赞助
                            </Button>
                        </a>
                    </div>
                    <div className="w-px h-20 bg-gray-500 hidden lg:block" />
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-2 mb-3">
                            <Image src="/svg/afdianLogo.svg" width={28} height={28} alt="爱发电" style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(2000%) hue-rotate(222deg)' }} />
                            <span className="text-2xl font-bold text-teal">爱发电</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">面向国内用户</p>
                        <a href="https://ifdian.net/a/assettocn" target="_blank" rel="noreferrer">
                            <Button className="w-40 hover:text-[#946CE6] bg-[#946CE6] hover:bg-white border-2 border-[#946CE6]">
                                赞助
                            </Button>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    </section>
);
