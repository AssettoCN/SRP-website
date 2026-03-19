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
                <a href="https://space.bilibili.com/" target="_blank" rel="noreferrer">
                    <span className="hover:text-blue-light transition inline-block"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg></span>
                </a>
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
