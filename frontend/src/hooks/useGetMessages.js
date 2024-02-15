import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/messages/${selectedConversation?._id}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch messages. Status: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format");
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
