import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 2,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 3,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 4,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 5,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 6,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 7,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 8,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 9,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 10,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
    {
      id: 11,
      title: "Why You Need a Developer Portfolio",
      description:
        "Learn how a strong portfolio can help you land clients and jobs.",
    },
  ];
  return (
    // <div className=" text-gray-100 py-1">
    //   <div className="mx-auto w-11/12 px-6 lg:px-8">
    //     {/* <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
    //         From the blog
    //       </h2>
    //       <p className="mt-2 text-lg/8 text-gray-100">
    //         Learn how to grow your business with our expert advice.
    //       </p>
    //     </div> */}
    //     <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  text-gray-100pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //       {posts.map((post) => (
    //         <Link key={post.id} href={`/blogs/${post.id}`}>
    //           <article
    //             key={post.id}
    //             className="flex max-w-xl flex-col items-start justify-between"
    //           >
    //             <div className="flex items-center gap-x-4 text-xs">
    //               <time dateTime={post.datetime} className="text-gray-100">
    //                 {post.date}
    //               </time>
    //               <Link
    //                 href={`/blogs/${post.id}`}
    //                 className="relative z-10 rounded-full bg-gray-900 px-3 py-1.5 font-medium text-gray-100 hover:bg-gray-100"
    //               >
    //                 {post.category.title}
    //               </Link>
    //             </div>
    //             <div className="group relative grow">
    //               <h3 className="mt-3 text-lg/6 font-semibold text-gray-100 group-hover:text-gray-600">
    //                 <Link href={`/blogs/${post.id}`}>
    //                   <span className="absolute inset-0" />
    //                   {post.title}
    //                 </Link>
    //               </h3>
    //               <p className="mt-5 line-clamp-3 text-sm/6 text-gray-100">
    //                 {post.description}
    //               </p>
    //             </div>
    //             <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
    //               <img
    //                 alt=""
    //                 src={post.author.imageUrl}
    //                 className="size-10 rounded-full bg-gray-50"
    //               />
    //               <div className="text-sm/6">
    //                 <p className="font-semibold text-gray-100">
    //                   <Link href={`/blogs/${post.id}`}>
    //                     <span className="absolute inset-0" />
    //                     {post.author.name}
    //                   </Link>
    //                 </p>
    //                 <p className="text-gray-100">{post.author.role}</p>
    //               </div>
    //             </div>
    //           </article>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.length > 0
          ? blogs.map((item, index) => (
              <Link
                className="group flex flex-col focus:outline-hidden"
                href={`/blogs/${item?.id}`}
                key={index}
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Blog Image"
                  />
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                    Sponsored
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    {item?.title}
                  </h3>
                  <p className="mt-3 text-gray-800 dark:text-neutral-200">
                    {item?.description}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default page;
