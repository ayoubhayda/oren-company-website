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
      shortTitleEN: "",
      shortTitleFR: "",
      shortTitleAR: "",
      longTitleEN: "",
      longTitleFR: "",
      longTitleAR: "",
      shortDescriptionEN: "",
      shortDescriptionFR: "",
      shortDescriptionAR: "",
      longDescriptionEN: "",
      longDescriptionFR: "",
      longDescriptionAR: "",
      thumbnailUrl: "",
      images: [],
      technologies: [],
      githubLink: "",
      demoLink: "",
      duration: 1,
      category: "",
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

  const addImage = (url: string) => {
    const currentImages = form.getValues("images") || [];
    form.setValue("images", [...currentImages, url]);
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images") || [];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    form.setValue("images", updatedImages);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="col-span-1 lg:col-span-2 flex flex-col "
      >
        {/* main card */}
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* English Section */}
            <div className="space-y-6 p-6 border rounded-lg bg-muted/20">
              <h3 className="text-lg font-semibold">English</h3>

              {/* English Titles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="shortTitleEN"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Short Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter project short title in English"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longTitleEN"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Long Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter project full title in English"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* English Descriptions */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="shortDescriptionEN"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Brief project description in English"
                          className="resize-none h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longDescriptionEN"
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
              </div>
            </div>

            {/* French Section */}
            <div className="space-y-6 p-6 border rounded-lg bg-muted/20">
              <h3 className="text-lg font-semibold">Français</h3>

              {/* French Titles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="shortTitleFR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Titre Court</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez le titre court en français"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longTitleFR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Titre Long</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez le titre complet en français"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* French Descriptions */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="shortDescriptionFR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Description Courte</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Brève description du projet en français"
                          className="resize-none h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longDescriptionFR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel>Description Longue</FormLabel>
                      <FormControl>
                        <DescriptionEditor field={field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Arabic Section */}
            <div
              className="space-y-6 p-6 border rounded-lg bg-muted/20"
              dir="rtl"
            >
              <h3 className="text-lg font-semibold text-right">العربية</h3>

              {/* Arabic Titles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="longTitleAR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel className="text-right block">
                        العنوان الطويل
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل العنوان الكامل بالعربية"
                          className="text-right w-full "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shortTitleAR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel className="text-right block">
                        العنوان القصير
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل العنوان القصير بالعربية"
                          className="text-right w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Arabic Descriptions */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="shortDescriptionAR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel className="text-right block">
                        الوصف القصير
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="وصف موجز للمشروع بالعربية"
                          className="resize-none h-24 text-right w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longDescriptionAR"
                  render={({ field }) => (
                    <FormItem className="space-y-0.5">
                      <FormLabel className="text-right block">
                        الوصف الطويل
                      </FormLabel>
                      <FormControl>
                        <DescriptionEditor field={field} />
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

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
                        className="ut-button:bg-primary text-sm md:text-base ut-button:h-9 md:ut-button:h-10 ut-button:rounded-sm ut-button:px-4 md:ut-button:px-6 ut-button:py-2 ut-upload-icon:text-muted-foreground  ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-button:cursor-pointer ut-allowed-content:text-muted-foreground border-primary p-6 md:p-8"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Images Upload */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Images</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      {/* Display existing images */}
                      {field.value && field.value.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {field.value.map((image, index) => (
                            <div key={index} className="relative">
                              <Image
                                src={image}
                                alt={`Project image ${index + 1}`}
                                width={150}
                                height={100}
                                className="rounded-lg object-cover w-full aspect-video"
                              />
                              <Button
                                variant="destructive"
                                type="button"
                                size="icon"
                                className="absolute -top-2 -right-2 rounded-full cursor-pointer !bg-red-600/80 hover:!bg-red-600/95 transition-all duration-200 ease-in-out !size-6"
                                onClick={() => removeImage(index)}
                              >
                                <TrashIcon className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Upload new image */}
                      <UploadDropzone
                        endpoint={"imageUploader"}
                        onClientUploadComplete={(files) => {
                          addImage(files[0].ufsUrl);
                        }}
                        className="ut-button:bg-primary text-sm md:text-base ut-button:h-9 md:ut-button:h-10 ut-button:rounded-sm ut-button:px-4 md:ut-button:px-6 ut-button:py-2 ut-upload-icon:text-muted-foreground  ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-button:cursor-pointer ut-allowed-content:text-muted-foreground border-primary p-6 md:p-8"
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

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <FormLabel>Project Duration (Days)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="30"
                        min="1"
                        max="365"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 1)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <FormLabel>Project Category</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a category</option>
                        <option value="web-development">Web Development</option>
                        <option value="saas">SaaS</option>
                        <option value="desktop-app">Desktop App</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="design">Design</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="social-media">Social Media</option>
                        <option value="custom-platforms">
                          Custom Platforms
                        </option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Footer Section */}
        <div className="mt-4 space-y-4">
          {/* Privacy Notice */}
          <div className="text-xs text-muted-foreground text-left">
            <p>
              By submitting, you agree to our{" "}
              <a
                href="/privacy"
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms"
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
              disabled={pending}
              className="px-6 py-2 h-10 font-medium transition-all duration-200 min-w-[100px]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={pending}
              className="px-8 py-2 h-10 font-medium text-white bg-primary hover:bg-primary/90 disabled:opacity-50 transition-all duration-200 shadow-sm hover:shadow-md min-w-[120px]"
            >
              {pending ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
