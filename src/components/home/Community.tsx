import { MouseEventHandler, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faQq } from '@fortawesome/free-brands-svg-icons';
import { Card, CardBody, CardTitle } from '../utils/Card';
import Container from '../utils/Container';
import GameServer from './GameServer';

const STATISTICS_ENDPOINT = 'https://api.shutokorevivalproject.com/Statistics';

const regionNames: Record<string, string> = {
    'Asia': '亚洲',
    'Europe': '欧洲',
    'US East': '美国东部',
    'China': '中国',
};

const chinaMockServers: ServerInfo[] = [
    { address: '127.0.0.1', name: '中国 1 - 无车流', port: 9221, clients: 0, maxClients: 32 },
    { address: '127.0.0.1', name: '中国 2 - 车流', port: 9222, clients: 0, maxClients: 32 },
    { address: '127.0.0.1', name: '中国 3 - 车流 - 街车', port: 9223, clients: 0, maxClients: 32 },
];

const translateServerName = (name: string) => name
    .replace(/No Traffic/g, '无车流')
    .replace(/Traffic - Street Cars/g, '车流 - 街车')
    .replace(/Traffic - Event Server/g, '车流 - 活动服')
    .replace(/Traffic/g, '车流')
    .replace(/PTB/g, '测试服')
    .replace(/^Asia /, '亚洲 ')
    .replace(/^EU /, '欧洲 ')
    .replace(/^US /, '美东 ');

const Statistic = (props: {statCount: string, statName: string}) => (
    <div id={props.statName}>
        <h1 className="text-5xl font-bold text-blue-dark-contrast">{props.statCount}</h1>
        <p>{props.statName}</p>
    </div>
);

interface ServerInfo {
    address: string
    name: string
    port: number
    clients: number
    maxClients: number
}

interface StatisticsResponse {
    numPlayers: number
    numServers: number
    servers: {[region: string]: ServerInfo[]}
}

export const Community = () => {
    const [playerCount, setPlayerCount] = useState(0);
    const [serverCount, setServerCount] = useState(0);
    const [servers, setServers] = useState<{[region: string]: ServerInfo[]}>({});
    const [selectedRegion, setSelectedRegion] = useState('China');

    useEffect(() => {
        fetch(STATISTICS_ENDPOINT)
            .then((res) => res.json())
            .then((res : StatisticsResponse) => {
                setPlayerCount(res.numPlayers);
                setServerCount(res.numServers);
                setServers({ 'China': chinaMockServers, ...res.servers });

                if (selectedRegion === '') {
                    const allServers = { 'China': chinaMockServers, ...res.servers };
                    setSelectedRegion(Object.keys(allServers)[0]);
                }
            })
            .catch((err) => console.log(err));
    }, [selectedRegion]);

    const onRegionClicked : MouseEventHandler<HTMLButtonElement> = (e) => {
        setSelectedRegion((e.target as HTMLButtonElement).value);
    };

    return (
        <section id="community" className="flex flex-col justify-between items-stretch text-blue-dark-contrast bg-gray-50 lg:flex-row">
            <Container className="flex flex-col py-12 max-w-6xl lg:px-24">
                <span className="mb-3 w-24 h-2 bg-blue-light rounded-full" />
                <h1>社区概览</h1>
                <p className="max-w-prose text-gray-800">
                    首都高复兴计划(SRP)是神力科莎上最受欢迎的地图模组。
                </p>

                <div className="grid grid-cols-2 gap-y-8 my-6 sm:grid-cols-4">
                    <Statistic statCount={playerCount.toString()} statName="在线玩家" />
                    <Statistic statCount={serverCount.toString()} statName="服务器" />
                    <Statistic statCount="700k+" statName="Discord 成员" />
                </div>

                <div className="my-8">
                    <Card bgColour="gray-100" className="border-discord shadow-lg">
                        <CardTitle>
                            <span className="flex justify-center items-center p-2 mr-2 bg-discord rounded-xl w-9 h-9">
                                <FontAwesomeIcon icon={faDiscord} className="text-white w-5 h-5" />
                            </span>
                            Discord
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="flex justify-center items-center p-2 mr-2 bg-[#12B7F5] rounded-xl w-9 h-9">
                                <FontAwesomeIcon icon={faQq} className="text-white w-5 h-5" />
                            </span>
                            QQ群
                        </CardTitle>
                        <CardBody>
                            加入我们的 Discord 或 QQ 群，获取进度报告、参与活动或寻求帮助。
                        </CardBody>

                        <div className="flex gap-3 self-center">
                            <a
                                className="py-2 px-3 text-xl font-semibold text-white bg-discord hover:bg-discord-dark rounded-xl transition"
                                href="https://discord.gg/shutokorevivalproject"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                                Discord&nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                            <a
                                className="py-2 px-3 text-xl font-semibold text-white bg-[#12B7F5] hover:bg-[#0EA1DA] rounded-xl transition"
                                href="https://discord.gg/shutokorevivalproject"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faQq} className="mr-2" />
                                QQ群&nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </Card>
                </div>
            </Container>
            <div className="flex flex-col divide-y divide-gray-500 lg:w-2/5 m-12">
                <div className="pt-16 pb-8 lg:pt-0">
                    <span className="text-4xl text-blue-light">官方服务器</span>

                    <p className="mt-4 mb-6 max-w-prose">
                        由SRP团队与AssettoCN托管的服务器，专注于街头竞速。
                    </p>

                    <div className="text-sm font-medium text-center text-gray-500 border-gray-200">
                        <ul className="flex flex-wrap -mb-px">
                            {Object.keys(servers).map((server) => {
                                let classes = 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-400 hover:text-gray-600';
                                if (selectedRegion === server) {
                                    classes = 'inline-block p-4 border-b-2 rounded-t-lg active text-blue-light border-blue-light';
                                }

                                return (
                                    <li className="mr-2 text-xl font-semibold">
                                        <button type="button" onClick={onRegionClicked} value={server} className={classes}>{regionNames[server] ?? server}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="divide-y divide-gray-400">
                        {servers[selectedRegion]?.map((server) => (
                            <GameServer
                                name={selectedRegion === 'China' ? server.name : translateServerName(server.name)}
                                clients={server.clients}
                                maxClients={server.maxClients}
                                link={`acmanager://race/online/join?query=race/online/join&ip=${server.address}&httpPort=${server.port}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
