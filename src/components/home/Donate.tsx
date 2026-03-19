import { Button } from '../utils/Button';
import Container from '../utils/Container';

export const Donate = () => (
    <section className="bg-blue-darker">
        <div className="relative">
            <img className="object-cover absolute w-full h-full opacity-20" src="/img/2023-06-03-20-54-59-bw-shuto_revival_project_beta-ddm_honda_civic_fd2.png" alt="" />

            <Container className="flex relative top-0 flex-col items-center py-12 max-w-7xl lg:items-start">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-teal">Patreon 赞助</h1>
                    <p className="pt-4 pb-6">
                        资金贡献将用于服务器的扩展和维护开支。
                        <br />
                        超出部分将用于购买项目所需的素材（如 3D 模型），
                        以及协助开发团队维修、维护或升级硬件，以提升工作效率和稳定性。
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-3 space-x-4 text-center md:space-y-0 lg:flex-row lg:items-start lg:text-left">
                    <a href="https://www.patreon.com/Shutoko_Revival_Project" target="_blank" rel="noreferrer">
                        <Button className="w-40 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white border-2 border-teal-light-contrast">
                            赞助
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    </section>
);
