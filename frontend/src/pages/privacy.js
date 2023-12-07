import Image from "next/image";

export default function Privacy() {
  return (
    <main style={{ height: "100vh", backgroundColor: "#000" }}>
      <div
        className="flex flex-row items-center justify-center"
        style={{ height: "100%" }}
      >
        <Image
          src="https://i.imgur.com/bgJUL9K.gif"
          width={900}
          height={900}
          alt="yaarrr"
        />
      </div>
    </main>
  );
}
