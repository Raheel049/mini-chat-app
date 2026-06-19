import { z } from 'zod'
import { createAutomations, saveListener, updateAutomationName } from "@/action/automations";
import { useMutationData } from "./use-mutation-data";
import { useEffect, useRef, useState } from "react";


export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );

  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  );

  useEffect(() => {
   
    function handleClickOutside(event: MouseEvent) {
      console.log("click",inputRef.current)
     
      if (
        inputRef.current && !inputRef.current.contains(event.target as Node | null)
      ) {
        console.log("Bahar click hua hai!");
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value });
          disableEdit()
        } else {
          disableEdit();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[edit, mutate]);

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending,
  };
};

export const useListner = (id: string) => {
  const [Listener, setListner] = useState<'MESSAGE' | 'SMARTAI'>('MESSAGE')

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  })

  const {} = useMutationData(["create-listner"], (data:{prompt:string, reply:string}) => saveListener(id, listener, data.prompt, data.reply)

  )
}
