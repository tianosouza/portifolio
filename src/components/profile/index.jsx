import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react"
import Download from "../dowload";

export function ProfileCard() {
  return (
    <Card className="w-96 dark:bg-slate-400 flex flex-col rounded-md shadow-lg items-center justify-center p-4">
      <CardHeader floated={false} className=" rounded-full sm:rounded-lg flex items-center justify-center">
        <img className="rounded-full sm:rounded-lg" src="https://media.licdn.com/dms/image/v2/D4D03AQEPlKzSS_pe8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705251107524?e=1742428800&v=beta&t=Huj8sKKSvy38J6POm0yVZabxlWXO7VMnUMdgCYdLpbA" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="mb-2 dark:text-slate-200">
          Cristiano Souza
        </Typography>
        <div className="text-sm text-blue-gray-500 font-semibold dark:text-slate-200">
          Desenvolvedor FullStack | Ruby on Rails | React | Tailwind | Bootstrap | CSS |
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2 mt-2">
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.facebook.com/ltianosouzal"
            variant="lead"
            color="blue"
            textGradient
          >
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.instagram.com/ltianosouzal"
            variant="lead"
            color="purple"
            textGradient
          >
            <FontAwesomeIcon icon={faInstagram} className="text-rose-500 text-2xl" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.linkedin.com/in/tianosouza/"
            variant="lead"
            color="blue"
            textGradient
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://github.com/tianosouza"
            variant="lead"
            color="black"
            textGradient
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </Typography>
        </Tooltip>
        <Download />
      </CardFooter>
    </Card>
  );
}