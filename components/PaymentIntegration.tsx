import { useState } from 'react';
import { CreditCard, DollarSign, Shield, Lock, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function PaymentIntegration() {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [donationAmount, setDonationAmount] = useState('50');
  const [isProcessing, setIsProcessing] = useState(false);

  const donationOptions = [
    { value: '25', label: '$25 - Provide one student internet access for a week' },
    { value: '50', label: '$50 - Fund digital learning materials' },
    { value: '100', label: '$100 - Equip a hub with solar-powered devices' },
    { value: '250', label: '$250 - Sponsor a full digital skills course' },
    { value: '500', label: '$500 - Keep a community hub running for one month' },
    { value: 'custom', label: 'Custom amount' }
  ];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('🌍 Thank you for donating! Your support empowers marginalized youth to access digital skills and transform their futures.');
    }, 2000);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Donate Today, Empower Tomorrow</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every dollar you give helps bridge the digital divide. Your support funds <span className="text-white font-semibold">scholarships, solar-powered hubs, and digital skills training</span> for marginalized youth across six countries.  
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Impact & Rewards */}
          <div className="space-y-6">
            <Card className="bg-black/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>$25</span>
                  <span>Gives one youth internet access for a week</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>$100</span>
                  <span>Provides solar-powered devices for a hub</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>$250</span>
                  <span>Sponsors a full digital skills course</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>$500</span>
                  <span>Keeps a hub running for one month</span>
                </div>
              </CardContent>
            </Card>

            {/* Rewards Section */}
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Gift className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-white">Donor Rewards</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Personalized thank-you email from our team</li>
                <li>• Quarterly impact report showing your contribution in action</li>
                <li>• Recognition on our Donor Wall (for gifts over $100)</li>
                <li>• Exclusive updates and stories from DEH youth</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-white">Secure & Transparent</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• 100% of donations go directly to programs</li>
                <li>• No administrative fees deducted</li>
                <li>• Regular impact reports sent to donors</li>
                <li>• Tax-deductible receipt provided</li>
              </ul>
            </div>
          </div>

          {/* Payment Form */}
          <Card className="bg-black/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Make a Donation
              </CardTitle>
              <CardDescription className="text-gray-400">
                Choose your preferred payment method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-6">
                {/* Payment Method Selection */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('stripe')}
                    className={`flex-1 p-4 rounded-lg border transition-all duration-200 ${
                      paymentMethod === 'stripe' 
                        ? 'border-white bg-white/10' 
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <div className="text-white font-medium">Stripe</div>
                    <div className="text-gray-400 text-sm">Credit/Debit Cards</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex-1 p-4 rounded-lg border transition-all duration-200 ${
                      paymentMethod === 'paypal' 
                        ? 'border-white bg-white/10' 
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <div className="text-white font-medium">PayPal</div>
                    <div className="text-gray-400 text-sm">PayPal Account</div>
                  </button>
                </div>

                {/* Donation Amount */}
                <div>
                  <label className="block text-white mb-3">Donation Amount</label>
                  <Select onValueChange={setDonationAmount} defaultValue="50">
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20">
                      {donationOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                          className="text-white hover:bg-white/10"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {donationAmount === 'custom' && (
                    <div className="mt-3">
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        min="10"
                      />
                    </div>
                  )}
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <Input
                    placeholder="Full Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Security Notice */}
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    `Donate $${donationAmount === 'custom' ? '...' : donationAmount}`
                  )}
                </Button>

                <p className="text-gray-400 text-xs text-center">
                  This is a demo form. In production, this would integrate with real Stripe/PayPal APIs. Replace with actual payment processor integration.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
