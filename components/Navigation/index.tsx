import Link from "next/link";
import { StyledLi, StyledUl, BackgroundPicture } from "./styles";
import { useRouter } from "next/router";
import { hrefResolver } from "prismic-config";
import { Document } from "prismic-javascript/types/documents";

type MenuItem = {
  page: Document;
  label: string;
};

const Navigation = ({ config }: { config: Document }) => {
  const { asPath } = useRouter();

  return (
    <StyledUl>
      {config?.data &&
        !!config.data.menu?.length &&
        config.data.menu.map((item: MenuItem) => {
          const href = hrefResolver(item.page);
          return (
            <StyledLi
              key={href}
              active={asPath === href}
            >
              <Link href={href}>
                <a>{item.label}</a>
              </Link>
            </StyledLi>
          );
        })}
      {config?.data?.deco?.url && (
        <BackgroundPicture
          width={config.data.deco.dimensions.width}
          height={config.data.deco.dimensions.height}
          src={config.data.deco.url}
        />
      )}
    </StyledUl>
  );
};

export default Navigation;
