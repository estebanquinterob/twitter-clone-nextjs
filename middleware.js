import { authMiddleware } from "next-auth/middleware";

export default authMiddleware({
  // Aquí luego pondremos opciones como authorized(), si usas Credentials
});

export const config = {
  matcher: ["/home"],
};
