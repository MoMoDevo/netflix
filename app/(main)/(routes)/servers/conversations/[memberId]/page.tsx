import { UserButton, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
 import { ChatInput } from "@/components/chatt/chat-input";


import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
 
import prismadb from "@/lib/prismaDb";

interface MemberIdPageProps {
  params: {
    memberId: string;
 
  },
  
}

const MemberIdPage = async ({
  params,
 
}: MemberIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const currentMember = await prismadb.member.findFirst({
    where: {
   
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(currentMember.id, params.memberId);
  console.log(conversation)

  if (!conversation) {
    return redirect("/");
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne;

  //get chatt messages
  const messages=await prismadb.directMessage.findMany({
    where:{
      conversationId:conversation.id
    },
    include: {
      member: {
        include: {
          profile: true,
        }
      }
    },
    orderBy: {
      createdAt: "desc",
    }
  })
  console.log(messages)

 return ( 
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      
       <UserButton/>
        <>
         
          <ChatInput
            name={otherMember.profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
           
        <div className="flex">
          {messages.map((message)=>(
            <div className="flex flex-col" key={message.id}>
              
              <p>  sended by   {message.member.profile.name}: {message.content}</p>

            </div>
          ))}
            
        </div>








    
        </>
    
    </div>
   );
}
  export default  MemberIdPage

{/*

import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";


import { currentProfile } from "@/lib/current-profile";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";
import { MediaRoom } from "@/components/media-room";
import prismadb from "@/lib/prismaDb";

interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  },
  searchParams: {
    video?: boolean;
  }
}

const MemberIdPage = async ({
  params,
  searchParams,
}: MemberIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const currentMember = await prismadb.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(currentMember.id, params.memberId);

  if (!conversation) {
    return redirect(`/servers/${params.serverId}`);
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne;

  return ( 
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        imageUrl={otherMember.profile.imageUrl}
        name={otherMember.profile.name}
        serverId={params.serverId}
        type="conversation"
      />
      {searchParams.video && (
        <MediaRoom
          chatId={conversation.id}
          video={true}
          audio={true}
        />
      )}
      {!searchParams.video && (
        <>
          <ChatMessages
            member={currentMember}
            name={otherMember.profile.name}
            chatId={conversation.id}
            type="conversation"
            apiUrl="/api/direct-messages"
            paramKey="conversationId"
            paramValue={conversation.id}
            socketUrl="/api/socket/direct-messages"
            socketQuery={{
              conversationId: conversation.id,
            }}
          />
          <ChatInput
            name={otherMember.profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
        </>
      )}
    </div>
   );
}
 
export default MemberIdPage;
*/}