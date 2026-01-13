"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Validar variables de entorno en tiempo de ejecución
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Faltan las credenciales de Supabase en .env");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Definir Schema de Validación (Mismo que en el cliente para doble seguridad)
const formSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(7),
    email: z.string().email(),
    barbershop_name: z.string().min(2),
    consent: z.boolean(),
});

export type FormState = {
    success: boolean;
    message?: string;
    errors?: Record<string, string[]>;
};

export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
    // 1. Extraer y Validar Datos
    const rawData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        barbershop_name: formData.get("barbershop_name"),
        consent: formData.get("consent") === "on",
    };

    const validatedFields = formSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Por favor corrige los errores del formulario.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // 2. Insertar en Supabase
    const { error } = await supabase.from("leads").insert([validatedFields.data]);

    if (error) {
        console.error("Supabase Error:", error);
        return {
            success: false,
            message: "Error al guardar en base de datos. Inténtelo más tarde.",
        };
    }

    // 3. (TODO) Enviar Email de Notificación
    // Aquí integrarías Resend, SendGrid o Nodemailer
    // await sendNotificationEmail(validatedFields.data);

    return {
        success: true,
        message: "¡Registro exitoso!",
    };
}
