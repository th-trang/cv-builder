import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClientLayout from "./ClientLayout";

export default async function LocaleLayout({ 
    children, 
    params 
}: { 
    children: React.ReactNode, 
    params: Promise<{ locale: string }> 
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <ClientLayout params={{ lang: locale }}>
                {children}
            </ClientLayout>
        </NextIntlClientProvider>
    )
}