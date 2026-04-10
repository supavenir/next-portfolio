"use client";

import Projet from "@/models/Projet";
import {Input} from "@/components/ui/input";
import {useState} from "react";

export default function ProjetForm({projet}:{projet:Projet}) {
    const [updatedProjet, setUpdatedProjet] = useState<Projet>(projet);
    return (
        <Input value={updatedProjet.titre}
               onChange={(e) => setUpdatedProjet(
                   {...updatedProjet, titre: e.target.value}
               )}
        />
    );
}