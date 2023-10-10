const posts = [
  {
    title: "A Journey Through Lorem Ipsum",
    slug: "journey-through-lorem-ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, lectus et fermentum bibendum, turpis mauris iaculis justo, non ultrices elit sapien sed dolor. Ut in arcu eu risus aliquet convallis. Nunc semper mauris nec tempor tristique. Etiam in dui eu libero laoreet vestibulum. Curabitur vel gravida risus, in consectetur mi. Nam euismod velit et velit viverra, vitae tincidunt massa pulvinar. Proin a justo vitae urna auctor mattis at vel sem. Nam euismod scelerisque cursus. Duis commodo ligula vel erat posuere tempus. Nulla facilisi."
  },
  {
    title: "Exploring Lorem Ipsum Content",
    slug: "exploring-lorem-ipsum-content",
    content: "Suspendisse potenti. Maecenas consectetur libero eu tellus vestibulum, ut hendrerit purus ultrices. Duis ut ex et sem euismod volutpat. Curabitur vitae tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vulputate, libero ut lacinia bibendum, massa arcu facilisis nisi, in tempor sapien mi vel nunc. Morbi id leo a nulla malesuada pellentesque. Curabitur vel tortor vitae massa venenatis tempus."
  },
  {
    title: "The Beauty of Lorem Ipsum Text",
    slug: "beauty-of-lorem-ipsum-text",
    content: "Pellentesque venenatis, ipsum a rhoncus posuere, urna elit cursus purus, eu tincidunt urna nulla in mauris. Quisque consectetur vitae dui in aliquam. Maecenas vel venenatis lacus. Curabitur sed nisl non orci aliquet facilisis. Vestibulum auctor quam sit amet metus congue aliquet. Proin vulputate efficitur nulla, non convallis tortor consequat non. Duis feugiat auctor urna non cursus. Proin vulputate, urna et lacinia eleifend, neque purus auctor ligula, sit amet bibendum odio nunc a dolor."
  },
  {
    title: "In Search of Lorem Ipsum Wisdom",
    slug: "search-of-lorem-ipsum-wisdom",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget bibendum nulla. Etiam ultrices consectetur ligula, non consequat eros scelerisque et. Fusce rhoncus, leo et auctor dignissim, lorem ipsum placerat ipsum, a bibendum libero metus vel velit."
  },
  {
    title: "The Artistry of Lorem Ipsum Creation",
    slug: "artistry-of-lorem-ipsum-creation",
    content: "Nulla facilisi. Praesent ullamcorper neque vel hendrerit. Sed vel lectus eget mi mattis tincidunt. In fermentum euismod odio, id pharetra risus sollicitudin id. Aliquam non malesuada nulla. Quisque ac sagittis augue. Sed eget eleifend odio. Cras non tortor a risus efficitur euismod."
  },
  {
    title: "Unveiling the Secrets of Lorem Ipsum",
    slug: "secrets-of-lorem-ipsum",
    content: "Integer at metus id mi imperdiet malesuada. Duis suscipit ex a scelerisque. Fusce eget libero ut sapien cursus tincidunt. Maecenas ultrices metus eu purus facilisis, quis volutpat odio scelerisque. Vestibulum non pharetra justo. Donec ut ex vel nulla vestibulum vulputate."
  }
];

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}
