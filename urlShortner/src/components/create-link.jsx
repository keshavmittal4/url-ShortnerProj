import { UrlState } from "@/context";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Error from "./error";
import { Card } from "./ui/card";
import * as yup from 'yup';

const CreateLink = () => {
  const { user } = UrlState();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    title: "",
    longUrl: longLink ? longLink : "",
    customUrl: "",
  });

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    longUrl: yup
        .string()
        .url("Must be a valid URL")
        .required("Long URL is required"),
    customUrl: yup.string(),
  })

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive">Create New Link</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">Create New</DialogTitle>
          </DialogHeader>

          <Input id="title" placeholder="Short Link's Title" />
          <Error message={"some error"} />

          <Input id="title" placeholder="Enter your Long URL" />
          <Error message={"some error"} />

          <div className="flex items-center gap-2">
            <Card className="p-2">cuttr.in</Card> /
            <Input id="title" placeholder="Custom Link (Optional)" />
          </div>

          <Error message={"some error"} />
          <DialogFooter className="sm:justify-start">
          <Button variant="destructive">Create</Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateLink;
