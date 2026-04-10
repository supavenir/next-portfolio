"use client";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {dataProjets} from "@/data/Projets";
import Projet from "@/models/Projet";
import {Card, CardAction, CardContent, CardTitle} from "@/components/ui/card";
import {request} from "@/services/HttpService";
import {API_URLS} from "@/constants/API_URLS";
import {useEffect, useState} from "react";
import {toast} from "sonner";
import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import ProjetForm from "@/components/projets/ProjetForm";

export default function BaseProjets() {
    const [projets, setProjets] = useState<Projet[]>([]);
    const [activeProjet, setActiveProjet] = useState<Projet|null>(null);
    const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
    const loadProjects = async () => {
        request<Projet[]>(API_URLS.projets.all,"GET").then((response) => {
            setProjets(response);
        })
    }

    useEffect(() => {
        if(projets.length>0) {
            toast(`Chargement de ${projets.length} projet(s)`);
        }
    }, [projets]);

    return(
        <>
            <Button onClick={loadProjects}
                    disabled={projets?.length >0}
            >Mes projets
                <Badge variant={"secondary"}>
                    {dataProjets.length}
                </Badge>
            </Button>
            {projets &&
            <div className={"flex items-center gap-2 my-5"}>
                {projets.map((projet) =>{
                    return (
                        <Card key={projet.id} className={"p-1"}>
                            <CardTitle>{projet.titre}</CardTitle>
                            <CardContent>{projet.description}</CardContent>
                            <CardAction>
                                <Button onClick={()=>{
                                    setOpenUpdateDialog(true);
                                    setActiveProjet(projet);
                                }}
                                    >
                                    ...
                                </Button>
                            </CardAction>
                        </Card>
                    )
                })
                }
            </div>
            }
            <Dialog open={openUpdateDialog} onOpenChange={setOpenUpdateDialog}>
                <DialogContent>
                    <DialogTitle>Modification de projet</DialogTitle>
                    <ProjetForm projet={activeProjet!}/>
                </DialogContent>
            </Dialog>
        </>
    );
}