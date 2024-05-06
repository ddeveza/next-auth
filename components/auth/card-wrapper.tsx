"use client";

import { Card, CardHeader } from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({ backButtonHref, backButtonLabel, children, headerLabel, showSocial }: CardWrapperProps) => {
  <Card className="">
    <CardHeader></CardHeader>
  </Card>;
};
