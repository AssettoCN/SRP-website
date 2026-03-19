import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faFacebook, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from './Container';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-light transition" icon={props.icon} size="lg" />
    </a>
);

export const Footer = () => (
    <footer className="py-8 bg-blue-dark">
        <Container className="flex flex-col space-y-2">

            <div className="flex gap-x-4 justify-center">
                <FooterIconItem icon={faGithub} href="https://github.com/Shutoko-Revival-Project" />
                <FooterIconItem icon={faTwitter} href="https://twitter.com/shutokorevival1" />
                <FooterIconItem icon={faFacebook} href="https://www.facebook.com/ShutokoRevivalProject/" />
                <FooterIconItem icon={faDiscord} href="https://discord.gg/shutokorevivalproject" />
                <FooterIconItem icon={faYoutube} href="https://www.youtube.com/@ShutokoRevivalProject" />
            </div>

            <div className="flex gap-x-4 justify-center text-center">
                <a
                    className="hover:underline"
                    href="https://github.com/Shutoko-Revival-Project/website"
                    target="_blank"
                    rel="noreferrer"
                >
                    源代码
                </a>
                {/* <span className="hover:underline cursor-pointer">
                    <Link href="/tos">
                        Terms of Service
                    </Link>
                </span>
                <span className="hover:underline cursor-pointer">
                    <Link href="/privacy">
                        Privacy Policy
                    </Link>
                </span> */}
            </div>

            <em className="text-center text-teal-100">&copy; 2026 Shutoko Revival Project & AssettoCN</em>
            <em className="text-center text-teal-100">
                背景视频由&nbsp;
                <a className="hover:underline" href="https://www.youtube.com/@osaxosa">OSA X</a>
                &nbsp;制作
            </em>
            <em className="text-center text-teal-100">网站基于SRP原始官网构建</em>

        </Container>
    </footer>
);
