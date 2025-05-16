import { HeroHighlightDemo } from '@/components/hero';
import Navbar from '@/components/navbar';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Link from 'next/link';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { url } = await searchParams;

  if (!url) {
    return (
      <div className="flex flex-col h-screen w-screen">
        <Navbar /> {/* Navbar stays fixed at the top */}
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <div className="flex flex-col justify-center items-center  w-full h-full">
            <HeroHighlightDemo /> {/* Render the Client Component here */}
          </div>
        </div>
      </div>
    );
  }

  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY ?? "",
      'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST ?? "",
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      url: Array.isArray(url) ? url[0] : url,
    }),
  };

  let post = null;

  try {
    const response = await fetch('https://snap-video3.p.rapidapi.com/download', options);


    if (!response.ok) {
      throw new Error('Failed to fetch video details');
    }

    post = await response.json();
  } catch (error) {
    console.error('Error fetching video details:', error);
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500">Error fetching video details: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }

  return (
    <HeroHighlight className="flex flex-col justify-center items-center h-screen overflow-hidden  text-white" >
      <Navbar />
      <div className="flex justify-center items-center p-8 pt-16 w-screen ">
        {post ? (
          <div className="flex flex-col items-center  p-6 sm:p-10 justify-center  max-w-md w-full bg-transparent rounded-lg shadow-md bg-slate-950">
            <img
              src={post.thumbnail}
              alt="Thumbnail"
              className="sm:h-[29vh] sm:min-w-[50vh] h-[28vh] min-w-[50vh] rounded-lg shadow-md object-cover"
            />
            <div className='flex flex-col items-center text-start justify-center'>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-white w-80 sm:w-full">{post.title}</h2>
              </div>
              <div className='flex flex-col items-start text-start'>
                <div className="mt-2">
                  <h2 className="text-md text-white">
                    <span className="text-blue-400 font-semibold">Video Length:</span> {post.duration}
                  </h2>
                </div>
                <div className="mt-2">
                  <h2 className="text-md text-white">
                    <span className="text-blue-400 font-semibold">Video Source:</span> {post.source}
                  </h2>
                </div>
                <div className="mt-2">
                  <h2 className="text-md text-white">
                    <span className="text-blue-400 font-semibold">Video Link:</span>{' '}
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      Watch Now
                    </a>
                  </h2>
                </div>
              </div>
              {post.medias && (
                <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-10">
                  {Object.values(post.medias).map((media: any, index: number) => (
                    <Link href={media?.url} key={index} className="">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-black shadow-sky-900 shadow-sm text-white flex items-center space-x-2 px-4 py-2"
                      >
                        <DownloadLogo />
                        <span className="font-bold">{media?.quality || "Unknown Quality"}</span>
                      </HoverBorderGradient>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No data available</p>
        )}
      </div>
    </HeroHighlight>
  );
}

const DownloadLogo = () => {
  return (
    <svg
      width="48"
      height="46"
      viewBox="0 0 24 23"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
    >
      <path d="M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM10 8V12H13L9 16L5 12H8V8H10ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z"></path>
    </svg>
  );
};

