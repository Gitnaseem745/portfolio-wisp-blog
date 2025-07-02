import { siteConfig } from "@/config/siteConfig";
import { Text } from "./typography";

export function Footer() {
  return (
    <div className="flex justify-center items-center my-6">
      <Text size="sm" variant="muted">
        © 2025 {siteConfig.name}. All rights reserved.
      </Text>
    </div>
  );
}
