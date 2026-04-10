"use client";

import Projet from "@/models/Projet";
import {zodResolver} from "@hookform/resolvers/zod"
import {useState} from "react";
import * as z from "zod";
import {Controller, useForm} from "react-hook-form";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function ProjetForm({projet}:{projet:Projet}) {
    const [updatedProjet, setUpdatedProjet] = useState<Projet>(projet);
    const formSchema = z.object({
        title: z
            .string()
            .min(5, "Le titre doit avoir au moins 5 caractères.")
            .max(32, "Le titre ne doit pas dépasser 32 caractères."),
        description: z
            .string()
            .min(20, "Description must be at least 20 characters.")
            .max(100, "Description must be at most 100 characters."),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: projet,
    })
    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="title">
                                Titre
                            </FieldLabel>
                            <Input
                                {...field}
                                id="title"
                                aria-invalid={fieldState.invalid}
                                placeholder="Titre..."
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                </FieldGroup>
            <hr/>
            <Button className={"mt-2"}>Valider</Button>
        </form>

    );
}