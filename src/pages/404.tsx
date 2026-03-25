const Custom404 = () => (
    <section>
        <div className="flex flex-col justify-center mx-auto max-w-md min-h-screen text-center md:max-w-4xl">
            <h5 className="text-9xl font-bold text-blue-light">404</h5>
            <h2 className="mt-8 text-4xl font-bold">
                您访问的页面不存在。
            </h2>
            <h1 className="mt-4 text-xl font-medium text-grey-light">
                如果您认为这是一个错误，请通过我们的 Discord 联系我们，
                或返回首页。
            </h1>
        </div>

        <video
            className="object-cover fixed -z-10 w-screen h-screen opacity-20"
            src="/video/srp-bg.mp4"
            playsInline
            autoPlay
            muted
            loop
        />
    </section>
);

export default Custom404;
