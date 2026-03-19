import { useCallback, useState } from 'react';
import { Checkbox, Label, Modal } from 'flowbite-react';
import { Button } from './Button';

type TermsModalProps = {
    show: boolean,
    url?: string,
    onClose: (() => void),
};

export const TermsModal = (props: TermsModalProps) => {
    const [tosAgreed, setTosAgreed] = useState(false);

    const onClose = useCallback(() => {
        setTosAgreed(false);
        props.onClose();
    }, [props]);

    const onDownloadClick = useCallback(() => {
        if (tosAgreed) {
            onClose();
        }
    }, [tosAgreed, onClose]);

    return (
        <Modal show={props.show} onClose={onClose}>
            <Modal.Header>使用条款</Modal.Header>
            <Modal.Body>
                <div className="space-y-3">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>您可以：</strong>
                        <ul className="list-disc pl-5">
                            <li>按原样使用 SRP 赛道，用于娱乐、训练或教育目的。</li>
                            <li>创作使用 SRP 赛道的媒体内容（截图、视频、艺术作品等）。</li>
                            <li>
                                提供使用 SRP 赛道的服务（免费、付费或其他形式），前提是不与本条款冲突。
                                如需澄清，可联系 shutokorevivalproject@gmail.com。
                            </li>
                        </ul>
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>您不可以：</strong>
                        <ul className="list-disc pl-5">
                            <li>重新上传或重新托管 SRP 文件。如果您想与社区分享文件，可以通过链接到我们的网站或 Discord 服务器。</li>
                            <li>
                                修改 SRP 文件。文件加密是有原因的。未经我们明确书面许可，您不得以任何方式添加、删除或更改文件。
                                这包括纹理修改、模型的添加/删除以及移植到其他平台。
                            </li>
                            <li>
                                将 SRP 文件设为付费访问。Shutoko Revival Project 将始终保持免费下载和使用，
                                只要您拥有 SRP 运行所需的基础软件的合法副本。
                            </li>
                        </ul>
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>版权声明：</strong>
                        <ul className="list-disc pl-5">
                            <li>
                                "首都高速道路"由首都高速道路株式会社所有并运营，
                                因此他们是 SRP 所复制的现实世界资产的任何法律权利的持有者。
                            </li>
                            <li>SRP 中所有现实世界品牌形象的权利仍由其各自的现实世界持有者所有。</li>
                            <li>SRP 中所有第三方内容的权利仍由其各自的现实世界持有者所有。</li>
                        </ul>
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-full">
                    <Checkbox id="tos-agree" checked={tosAgreed} onChange={(e) => setTosAgreed(e.target.checked)} />
                    <Label htmlFor="tos-agree" className="text-base leading-relaxed text-gray-500 dark:text-gray-400 pl-1">我同意以上条款。</Label>
                </div>
                <div>
                    <a href={tosAgreed ? props.url : undefined} rel="nofollow">
                        <Button
                            onClick={onDownloadClick}
                            className={`float-right w-40 font-bold bg-green-500 ${tosAgreed ? 'hover:bg-green-700' : 'opacity-30 cursor-not-allowed'}`}
                        >
                            下载
                        </Button>
                    </a>
                </div>
            </Modal.Footer>
        </Modal>
    );
};
