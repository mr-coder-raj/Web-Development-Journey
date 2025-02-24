import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-50 relative">
      <Image className="mx-auto object-cover" fill={true} src="https://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
    </div>
  );
}
