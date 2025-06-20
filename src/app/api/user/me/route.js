import dbConnect from '@/lib/dbConnect';
import User from '@/models/userModel';
import { withAuth } from '@/utils/middleware';

export const GET = withAuth(async (req) => {
  await dbConnect();
  const user = await User.findById(req.user.id).select('-password');
  return Response.json(user);
});
