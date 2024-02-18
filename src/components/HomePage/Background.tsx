const Background = () => {
  return (
    <div className="absolute -z-10 h-screen w-full bg-white dark:bg-stone-950">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#202020_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Background;
