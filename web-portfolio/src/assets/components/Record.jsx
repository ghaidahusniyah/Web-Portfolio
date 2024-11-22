import React from 'react';

const Record = () => {
  return (
    <div className='h-max py-28 px-36 pt-28 flex snap-center snap-always'>
    <div className="timeline-container flex flex-col">
      <div className="timeline-item flex gap-3">
        <div className='flex flex-col'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-12 bg-third p-2 rounded-full">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          <div className="mx-auto timeline-line bg-text w-0.5 h-28"></div>
        </div>

        <div className='flex flex-col text-text text-start font-mulish text-lg'>
          <h1 className='font-ovo text-4xl'>About</h1>
          <p>A passionate <b>Frontend Developer, Social Media Specialist, UI/UX Designer</b> who loves turning ideas into creative solutions. With a knack for coding, copy writing and design, I enjoy exploring new ways to make things functional and beautiful.</p>
        </div>
      </div>

      <div className="timeline-item flex gap-3 w-full">
        <div className='flex flex-col'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-12 bg-third p-2 rounded-full">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>
          <div className="mx-auto timeline-line bg-text w-0.5 h-40"></div>
        </div>

      <div className='flex flex-col text-text text-start font-mulish text-lg gap-2'>
        <h1 className='font-ovo text-4xl'>Education</h1>
        <div className='grid grid-cols-2 font-mulish'>
            <div className='flex gap-3'>
              <img src="/img/smk.png" className='w-20 h-20' />
              <div className='flex flex-col'>
                <p className='font-bold'>SMKN 13 Bandung</p>
                <p>Software Engineer</p>
                <p className='text-sm'>2020 - 2023</p>
              </div>
            </div>

            <div className='flex gap-3'>
              <img src="/img/iwu.png" className='w-20 h-20' />
              <div className='flex flex-col'>
                <p className='font-bold'>International Women University</p>
                <p>Informatics</p>
                <p className='text-sm'>2023 - Now</p>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div className="timeline-item flex gap-3 w-full">
        <div className='flex flex-col'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-12 bg-third p-2 rounded-full">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
          </svg>
        </div>

        <div className='flex flex-col text-text text-start font-mulish text-lg gap-2'>
        <h1 className='font-ovo text-4xl'>Experience</h1>
        <div className='grid grid-cols-2 font-mulish gap-10'>
            <div className='flex gap-3'>
              <img src="/img/PAC.png" className='w-30 h-20' />
              <div className='flex flex-col'>
                <p className='font-bold'>Frontend Developer</p>
                <p>PT. Sarana Pactindo</p>
                <p className='text-sm'>6 Month</p>
              </div>
            </div>

            <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
              <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
            </svg>
              <div className='flex flex-col'>
                <p className='font-bold'>Content Planner</p>
                <p>PT. Renjana Sinergi Indonesia</p>
                <p className='text-sm'>4 Month</p>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>

</div>
  );
};

export default Record;
