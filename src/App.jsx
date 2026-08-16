import "./index.css";
import Grainient from "./animation/Grainient";

function App() {
  return (
    <div className="relative h-188 md:h-[100svh] flex justify-center items-center min-h-svh w-screen overflow-hidden bg-warna2/22 p-4 md:p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#efefef"
          color2="#a0a0a0"
          color3="#333333"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Glass Card */}
      <div className="relative z-10 flex flex-col h-180 md:h-full w-full rounded-xl p-2 md:p-6 bg-warna1/58 backdrop-blur-xl border border-warna1/40">
        <div className="flex h-full items-end md:items-center md:h-66 lg:h-74 w-full rounded-lg">
          <video className="w-full h-38 md:h-full object-cover object-center pointer-events-auto rounded-xs md:rounded-md" src="/assets/vids.webm" autoPlay loop muted playsInline />
        </div>

        <div className="flex flex-col md:flex-row justify-end md:justify-between items-end h-full w-full">
          <div className="flex flex-col md:flex-row h-fit w-full justify-between gap-4 md:gap-0">
            <h2 className="text-warna2 text-xl md:text-2xl lg:text-3xl w-full md:w-1/2 lg:w-1/4 text-pretty md:text-balance font-bold capitalize">I’m making a new version of this place. The old one is still around. Somehow.</h2>

            <div className="flex flex-col h-fit w-fit">
              <a href="https://nuradli.netlify.app" target="_blank" rel="noopener noreferrer" className="flex flex-col h-fit w-fit">
                <h3 className="text-warna2 text-sm md:text-lg lowercase">right here</h3>
                <span className="bg-warna2 w-full h-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end h-full w-full">
          <div className="flex flex-col items-start justify-end h-full w-full">
            <p className="text-warna2 text-sm md:text-lg font-semibold">contact me</p>

            <div className="flex flex-col h-fit w-fit">
              <a href="mailto:muhammadnuradlialghifari@gmail.com" className="flex flex-col h-fit w-fit">
                <h1 className="text-warna2 text-xl md:text-2xl">nuradli@gmail.com</h1>
                <span className="h-0.5 w-full bg-warna2" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-start md:items-end h-fit md:h-full w-full gap-2 md:gap-6 leading-none">
            <h1 className="text-warna2 text-[6.4rem] md:text-[7rem] lg:text-[12rem]">nuradli.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
