import { motion } from 'framer-motion';
import { User, Mail, Calendar, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useMember } from '@/integrations';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const { member, actions } = useMember();

  return (
    <div className="min-h-screen bg-cool-gray100">
      <Header />

      <div className="max-w-[100rem] mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-heading text-5xl font-bold text-deep-navy mb-4">
            My Profile
          </h1>
          <p className="font-paragraph text-xl text-cool-gray700">
            View and manage your account information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 bg-white border-none shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  {member?.profile?.photo?.url ? (
                    <Image
                      src={member.profile.photo.url}
                      alt={member.profile.nickname || 'Profile'}
                      width={120}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-rocket-orange/10 flex items-center justify-center">
                      <User className="w-16 h-16 text-rocket-orange" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h2 className="font-heading text-3xl font-bold text-deep-navy mb-2">
                      {member?.profile?.nickname ||
                        `${member?.contact?.firstName || ''} ${member?.contact?.lastName || ''}`.trim() ||
                        'User'}
                    </h2>
                    {member?.profile?.title && (
                      <p className="font-paragraph text-lg text-cool-gray700 mb-4">
                        {member.profile.title}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      {member?.loginEmailVerified ? (
                        <>
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="font-paragraph text-sm text-green-600 font-medium">
                            Verified Account
                          </span>
                        </>
                      ) : (
                        <>
                          <Shield className="w-5 h-5 text-cool-gray700" />
                          <span className="font-paragraph text-sm text-cool-gray700">
                            Unverified Account
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {member?.contact?.firstName && (
                      <div>
                        <label className="block font-paragraph text-sm text-cool-gray700 mb-2">
                          First Name
                        </label>
                        <div className="p-4 bg-cool-gray100 rounded-lg">
                          <p className="font-heading text-base font-bold text-deep-navy">
                            {member.contact.firstName}
                          </p>
                        </div>
                      </div>
                    )}
                    {member?.contact?.lastName && (
                      <div>
                        <label className="block font-paragraph text-sm text-cool-gray700 mb-2">
                          Last Name
                        </label>
                        <div className="p-4 bg-cool-gray100 rounded-lg">
                          <p className="font-heading text-base font-bold text-deep-navy">
                            {member.contact.lastName}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {member?.loginEmail && (
                    <div>
                      <label className="block font-paragraph text-sm text-cool-gray700 mb-2">
                        Email Address
                      </label>
                      <div className="p-4 bg-cool-gray100 rounded-lg flex items-center gap-3">
                        <Mail className="w-5 h-5 text-rocket-orange" />
                        <p className="font-heading text-base font-bold text-deep-navy">
                          {member.loginEmail}
                        </p>
                      </div>
                    </div>
                  )}

                  {member?.contact?.phones && member.contact.phones.length > 0 && (
                    <div>
                      <label className="block font-paragraph text-sm text-cool-gray700 mb-2">
                        Phone Number
                      </label>
                      <div className="p-4 bg-cool-gray100 rounded-lg">
                        <p className="font-heading text-base font-bold text-deep-navy">
                          {member.contact.phones[0]}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {member?._createdDate && (
                      <div>
                        <label className="block font-paragraph text-sm text-cool-gray700 mb-2">
                          Member Since
                        </label>
                        <div className="p-4 bg-cool-gray100 rounded-lg flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-rocket-orange" />
                          <p className="font-heading text-base font-bold text-deep-navy">
                            {new Date(member._createdDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {member?.lastLoginDate && (
                      <div>
                        <label className="block font-paragraph text-sm text-cool-gray700 mb-2">
                          Last Login
                        </label>
                        <div className="p-4 bg-cool-gray100 rounded-lg">
                          <p className="font-heading text-base font-bold text-deep-navy">
                            {new Date(member.lastLoginDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-gradient-to-br from-rocket-orange to-orange-600 border-none shadow-lg text-white">
                <h3 className="font-heading text-xl font-bold mb-4">Account Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-sm">Status</span>
                    <span className="font-heading text-base font-bold">
                      {member?.status || 'Active'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-sm">Email Verified</span>
                    <span className="font-heading text-base font-bold">
                      {member?.loginEmailVerified ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border-none shadow-lg">
                <h3 className="font-heading text-xl font-bold text-deep-navy mb-4">
                  Account Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-cool-gray300 text-cool-gray700 hover:bg-cool-gray100 font-heading"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-cool-gray300 text-cool-gray700 hover:bg-cool-gray100 font-heading"
                  >
                    Change Password
                  </Button>
                  <Button
                    onClick={actions.logout}
                    size="lg"
                    variant="outline"
                    className="w-full border-red-300 text-red-600 hover:bg-red-50 font-heading"
                  >
                    Sign Out
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-deep-navy border-none shadow-lg text-white">
                <h3 className="font-heading text-xl font-bold mb-4">Need Help?</h3>
                <p className="font-paragraph text-sm text-cool-gray100 mb-4">
                  Contact our support team if you have any questions or need assistance with your account.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-deep-navy font-heading"
                  onClick={() => window.location.href = 'mailto:info@taskreocket.com?subject=Support Request'}
                >
                  Contact Support
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
