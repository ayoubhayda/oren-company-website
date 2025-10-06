"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { TrashIcon } from "lucide-react";
import DescriptionEditor from "../richTextEditor/DescriptionEditor";
import TechSelector from "../general/TechSelector";
import { ProjectFormData, projectSchema } from "@/utils/zodSchemas";
import { UploadDropzone } from "@/utils/uploadthing";
import { createJobMutation } from "@/lib/actions";

const CreateProjectForm = () => {
  const [pending, setPending] = useState(false);

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      shortTitle: "",
      longTitle: "",
      shortDescription: "",
      longDescription: "",
      thumbnailUrl:
        "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscopg2ISUK7PC9RN0QEAUVp6KJSYq15mOnfGMg8",
      screenShots: [
        "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscopg2ISUK7PC9RN0QEAUVp6KJSYq15mOnfGMg8",
        "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscovnKHlUrIAJp0iBHEtmCc6nQs53Rqy7PS2XZW",
        "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscop6iPEd0K7PC9RN0QEAUVp6KJSYq15mOnfGMg",
        "https://6sn8pk7mrd.ufs.sh/f/1T4FQGtliscogbFSscU7NyqSsnJrthC0lG8DXwdTZuUbQIic",
      ],
      technologies: [],
      githubLink: "",
      demoLink: "",
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    try {
      setPending(true);
      await createJobMutation(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.error("Error creating project:", error);
      }
    } finally {
      setPending(false);
    }
  };

  const addScreenshot = (url: string) => {
    const currentScreenshots = form.getValues("screenShots") || [];
    form.setValue("screenShots", [...currentScreenshots, url]);
  };

  const removeScreenshot = (index: number) => {
    const currentScreenshots = form.getValues("screenShots") || [];
    const updatedScreenshots = currentScreenshots.filter((_, i) => i !== index);
    form.setValue("screenShots", updatedScreenshots);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="col-span-1 lg:col-span-2 flex flex-col gap-6"
      >
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Project Titles */}
            {/* Short Title */}
            <FormField
              control={form.control}
              name="shortTitle"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Short Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project short title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Long Title */}
            <FormField
              control={form.control}
              name="longTitle"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Long Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project full title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Descriptions */}
            {/* Short Description */}
            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Brief project description"
                      className="resize-none h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Long Description */}
            <FormField
              control={form.control}
              name="longDescription"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <DescriptionEditor field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Thumbnail Upload */}
            <FormField
              control={form.control}
              name="thumbnailUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Thumbnail</FormLabel>
                  <FormControl>
                    {field.value ? (
                      <div className="relative w-fit mt-2">
                        <Image
                          src={field.value}
                          alt="Project Thumbnail"
                          width={200}
                          height={120}
                          className="rounded-lg object-cover"
                        />
                        <Button
                          variant="destructive"
                          type="button"
                          size="icon"
                          className="absolute -top-2 -right-2 rounded-full cursor-pointer !bg-red-600/80 hover:!bg-red-600/95 transition-all duration-200 ease-in-out !size-8"
                          onClick={() => field.onChange("")}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint={"imageUploader"}
                        onClientUploadComplete={(files) => {
                          field.onChange(files[0].ufsUrl);
                        }}
                        onUploadError={() => {
                          console.log("Error uploading thumbnail");
                        }}
                        className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-button:cursor-pointer ut-allowed-content:text-muted-foreground border-primary"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Screenshots Upload */}
            <FormField
              control={form.control}
              name="screenShots"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Screenshots</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      {/* Display existing screenshots */}
                      {field.value && field.value.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {field.value.map((screenshot, index) => (
                            <div key={index} className="relative">
                              <Image
                                src={screenshot}
                                alt={`Screenshot ${index + 1}`}
                                width={150}
                                height={100}
                                className="rounded-lg object-cover w-full aspect-video"
                              />
                              <Button
                                variant="destructive"
                                type="button"
                                size="icon"
                                className="absolute -top-2 -right-2 rounded-full cursor-pointer !bg-red-600/80 hover:!bg-red-600/95 transition-all duration-200 ease-in-out !size-6"
                                onClick={() => removeScreenshot(index)}
                              >
                                <TrashIcon className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Upload new screenshot */}
                      <UploadDropzone
                        endpoint={"imageUploader"}
                        onClientUploadComplete={(files) => {
                          addScreenshot(files[0].ufsUrl);
                        }}
                        onUploadError={() => {
                          console.log("Error uploading screenshot");
                        }}
                        className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-button:cursor-pointer ut-allowed-content:text-muted-foreground border-primary"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="githubLink"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <FormLabel>GitHub Repository (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/username/repo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="demoLink"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <FormLabel>Live Demo Link (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://your-project-demo.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Technologies */}
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>Technologies Used</FormLabel>
                  <FormControl>
                    <TechSelector field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Submit button */}
        <Button
          type="submit"
          disabled={pending}
          className="w-full cursor-pointer text-white shadow-none"
        >
          {pending ? "Creating Project..." : "Create Project"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
