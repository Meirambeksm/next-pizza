import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
} /*4a*/

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } =
    useSession(); /*4b cut and paste from header.tsx (step 3a)*/

  return (
    <div className={className /*4c*/}>
      {!session ? (
        <Button /*4d*/
          onClick={onClickSignIn}
          variant="outline"
          className="flex items-center gap-1"
        >
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href="/profile" /*4e*/>
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      )}
    </div>
  );
};

// 4f. Go to index.ts in shared folder of components
